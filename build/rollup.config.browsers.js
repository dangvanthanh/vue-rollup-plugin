import base from './rollup.config.base';
import pkg from '../package.json';

const config = Object.assign({}, base, {
  output: {
    name: 'vue-component-named',
    extend: true,
    file: pkg.main,
    format: 'iife'
  }
})

export default config;
