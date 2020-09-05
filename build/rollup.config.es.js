import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import base from './rollup.config.base';
import pkg from '../package.json';

const config = Object.assign({}, base, {
  output: {
    name: 'vue-base',
    file: pkg.module,
    format: 'es',
  },
  plugins: [
    ...base.plugins,
    vue({ template: { optimizeSSR: true }, css: false }),
    css(),
  ],
});

export default config;
