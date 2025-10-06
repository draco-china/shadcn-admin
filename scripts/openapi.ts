import fs from 'node:fs';
import path from 'node:path';
import openapiTS, {
  astToString,
  type OpenAPITSOptions,
} from 'openapi-typescript';

interface Config {
  schemas: {
    name: string;
    path: string;
    output: string;
    options?: Partial<OpenAPITSOptions>;
  }[];
  globalOptions?: OpenAPITSOptions;
}

const defaultOptions: OpenAPITSOptions = {
  defaultNonNullable: true,
  exportType: true,
  makePathsEnum: true,
  pathParamsAsTypes: false,
  excludeDeprecated: true,
  alphabetize: true,
  enum: true,
  rootTypes: true,
  dedupeEnums: true,
  additionalProperties: false,
  immutable: false,
  arrayLength: false,
  enumValues: false,
  propertiesRequiredByDefault: false,
  emptyObjectsUnknown: false,
  rootTypesNoSchemaPrefix: false,
  generatePathParams: false,
};
function loadConfig(): Config {
  const configPath = path.join(process.cwd(), 'scripts', 'openapi.config.json');

  if (!fs.existsSync(configPath)) {
    throw new Error(
      `❌ Configuration file not found at ${configPath}. Please create an openapi.config.json file.`,
    );
  }

  try {
    const configFile = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configFile) as Config;

    if (
      !config.schemas ||
      !Array.isArray(config.schemas) ||
      config.schemas.length === 0
    ) {
      throw new Error(
        'Configuration must contain at least one schema in the "schemas" array.',
      );
    }

    for (const [index, schema] of config.schemas.entries()) {
      if (!schema.name || !schema.path || !schema.output) {
        throw new Error(
          `Schema at index ${index} is missing required fields: name, path, or output.`,
        );
      }
    }

    config.globalOptions = {
      ...defaultOptions,
      ...config.globalOptions,
    };

    console.log(`📋 Loaded configuration from ${configPath}`);
    console.log(`📊 Found ${config.schemas.length} schema(s) to process`);

    return config;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `❌ Invalid JSON in configuration file ${configPath}: ${error.message}`,
      );
    }
    throw error;
  }
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function resolveSchemaPath(schemaPath: string): string | URL {
  if (schemaPath.startsWith('http://') || schemaPath.startsWith('https://')) {
    return new URL(schemaPath);
  }

  if (path.isAbsolute(schemaPath)) {
    return schemaPath;
  }

  return path.resolve(process.cwd(), schemaPath);
}

async function generateTypesForSchema(
  schema: Config['schemas'][0],
  globalOptions: Config['globalOptions'],
): Promise<void> {
  console.log(`\n🔄 Processing ${schema.name}...`);

  // Resolve the schema path
  const resolvedPath = resolveSchemaPath(schema.path);
  const pathType =
    typeof resolvedPath === 'string' ? 'local file' : 'remote URL';
  console.log(`📁 Schema source: ${resolvedPath} (${pathType})`);

  // Generate TypeScript types
  console.log(`🏗️  Generating TypeScript definitions for ${schema.name}...`);

  try {
    // Merge global options with schema-specific options (schema overrides global)
    const openapiOptions = {
      ...globalOptions,
      ...schema.options,
    };

    const ast = await openapiTS(resolvedPath, openapiOptions);

    const contents = astToString(ast);

    // Ensure output directory exists
    const outputDir = path.dirname(schema.output);
    ensureDir(outputDir);

    // Write the generated types
    fs.writeFileSync(schema.output, contents);

    const stats = fs.statSync(schema.output);
    console.log(
      `✅ TypeScript definitions generated at ${schema.output} (${(stats.size / 1024).toFixed(2)}KB)`,
    );
  } catch (error) {
    throw new Error(
      `Failed to generate types for ${schema.name}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

async function main(): Promise<void> {
  const startTime = Date.now();

  console.log('🚀 Starting OpenAPI TypeScript generation...\n');

  const config = loadConfig();

  try {
    for (const schema of config.schemas) {
      await generateTypesForSchema(schema, config.globalOptions || {});
    }
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(
      `\n🎉 All TypeScript definitions generated successfully in ${duration}s`,
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes('Configuration file not found')
    ) {
      console.error(`\n${error.message}`);
      console.log(
        '\n💡 Create a configuration file with the following structure:',
      );
      console.log(`
{
  "schemas": [
    {
      "name": "My API",
      "path": "https://api.example.com/openapi.yaml",
      "outputPath": "./src/types/api.ts"
    },
    {
      "name": "Local API",
      "path": "./docs/openapi.yaml",
      "outputPath": "./src/types/local-api.ts"
    }
  ],
  "globalOptions": {
    "makePathsEnum": true,
    "exportType": true
  }
}`);
    } else {
      console.error(
        '\n❌ Generation failed:',
        error instanceof Error ? error.message : String(error),
      );
    }
    process.exit(1);
  }
}

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled rejection:', reason);
  process.exit(1);
});

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
