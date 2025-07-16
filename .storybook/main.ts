import { resolve, dirname } from 'path';
import type { UserConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const directoryPath = dirname(currentFilePath);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: [{ from: '../src/assets', to: '/assets/src/assets' }],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: resolve(directoryPath, '../tsconfig.json'),
    },
    skipCompiler: false,
  },
  viteFinal: async (config: UserConfig) => {
    if (config.plugins) {
      config.plugins.push(
        tsConfigPaths({
          projects: [resolve(directoryPath, '../tsconfig.json')],
        })
      );
    }
    return config;
  },
};

export default config;
