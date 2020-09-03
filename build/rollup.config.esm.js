import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import base from './rollup.config.base';
import pkg from '../package.json';

const config = Object.assign({}, base, {
  plugins: [
    vue({ template: { optimizeSSR: true }, css: false }),
    css()
  ],
  output: {
    file: pkg.module,
    format: 'esm'
  }
})

export default config;
