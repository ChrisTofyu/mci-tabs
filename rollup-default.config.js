import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import { main, module, peerDependencies } from './package.json';
import alias from '@rollup/plugin-alias';
import { resolve as pathResolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import image from '@rollup/plugin-image';
import { resolveImageUrls } from './postcss';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import purgecss from 'rollup-plugin-purgecss';

const currentFilePath = fileURLToPath(import.meta.url);
const directoryPath = dirname(currentFilePath);
const sourceMap = true;

const aliasConfig = alias({
  entries: [
    // Add other aliases as needed
    {
      find: '@internal/types',
      replacement: pathResolve(directoryPath, 'src/types'),
    },
    {
      find: '@utils',
      replacement: pathResolve(directoryPath, 'src/utils'),
    },
    {
      find: '@assets',
      replacement: pathResolve(directoryPath, 'src/assets'),
    },
    {
      find: '@components',
      replacement: pathResolve(directoryPath, 'src/components'),
    },
    {
      find: '@radix-styles',
      replacement: pathResolve(directoryPath, 'src/radix'),
    },
  ],
});

const postCssSetup = postcss({
  modules: false,
  plugins: [postcssImport(), resolveImageUrls()],
  extract: 'index.css',
  minimize: true,
  sourceMap,
});

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: main,
        format: 'cjs',
        sourcemap: sourceMap,
      },
      {
        file: module,
        format: 'esm',
        sourcemap: sourceMap,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      aliasConfig,
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        include: ['src/**/*'],
      }),
      terser(),
      image(),
      postCssSetup,
      purgecss({
        content: ['dist/**/*.html', 'dist/**/*.js', 'src/**/*.tsx'], // Adjust for .tsx files
        safelist: [/^is-/, /^has-/],
        css: ['dist/styles.css'],
      }),
      json(),
    ],
    external: [...Object.keys(peerDependencies || {})],
    onwarn: (warning, warn) => {
      // Suppress warnings for "use client" directives in radix-ui components
      if (
        warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
        warning.message.includes('"use client"')
      ) {
        return;
      }
      warn(warning);
    },
  },
  {
    input: 'src/index.tsx',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [aliasConfig, dts.default(), postCssSetup],
    external: [/\.scss$/, /\.css$/],
  },
];
