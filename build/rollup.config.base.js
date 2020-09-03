import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    esbuild({ minify: production })
  ]
}
