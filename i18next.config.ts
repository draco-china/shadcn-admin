import { defineConfig } from 'i18next-cli';
import { i18nConfig } from './src/config/i18n';

/**
 * i18next CLI configuration
 *
 * Used for extracting translation keys and managing translation files.
 * Inherits language settings from the shared i18n configuration.
 *
 * @see https://github.com/i18next/i18next-cli
 */
export default defineConfig({
  // Use supported languages from shared config
  locales: i18nConfig.supportedLngs as string[],

  // Extraction configuration
  extract: {
    input: 'src/**/*.{js,jsx,ts,tsx}', // Source files to scan
    output: 'public/locales/{{language}}/{{namespace}}.json', // Output path template
  },
});
