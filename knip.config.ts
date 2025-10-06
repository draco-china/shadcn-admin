import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['src/components/ui/**', 'src/routeTree.gen.ts', 'i18next.config.ts'],
  ignoreDependencies: ['tailwindcss', 'tw-animate-css', '@semantic-release/*'],
  paths: {
    '@/*': ['src/*'],
  },
};

export default config;
