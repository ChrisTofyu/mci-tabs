import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import uncss from 'postcss-uncss';
import cssnano from 'cssnano';
import fs from 'node:fs/promises';

export default {
  input: './dist/bundle.css',
  output: {
    file: 'dist/index.css',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      plugins: [
        postcssPresetEnv({ stage: 0 }),
        uncss({
          html: [
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
          ],
          css: ['./dist/bundle.css'],
          ignore: [/-module_/],
        }),
        cssnano({ preset: 'default' }),
      ],
    }),
    deleteCssPlugin('./dist/bundle.css'),
    deleteCssPlugin('./dist/bundle.css.map'),
  ],
};

function deleteCssPlugin(filePathToDelete) {
  return {
    name: 'delete-css',
    async writeBundle() {
      try {
        await fs.unlink(filePathToDelete);
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.warn(
            `Warning: CSS file not found at ${filePathToDelete}, cannot delete.`
          );
        } else {
          console.error(`Error deleting CSS file ${filePathToDelete}:`, error);
        }
      }
    },
  };
}
