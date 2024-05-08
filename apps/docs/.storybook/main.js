import { dirname, join, resolve } from 'path';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config = {
  stories: [
    '../stories/*.stories.tsx',
    '../stories/**/*.stories.tsx',
    '../stories/**/*.mdx',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {},

  async viteFinal(config, { configType }) {
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: 'ui',
            replacement: resolve(__dirname, '../../../packages/ui'),
          },
        ],
      },
    };
  },

  docs: {
    autodocs: true,
  },
};

export default config;
