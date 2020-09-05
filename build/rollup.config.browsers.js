import esbuild from 'rollup-plugin-esbuild';
import base from './rollup.config.base';
import pkg from '../package.json';

const production = !process.env.ROLLUP_WATCH;

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueBase',
    file: pkg.unpkg,
    format: 'iife'
  },
  plugins: [...base.plugins, esbuild({ minify: production })],
});

export default config;
