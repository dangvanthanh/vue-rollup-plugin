import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  plugins: [resolve(), commonjs(), vue()],
};
