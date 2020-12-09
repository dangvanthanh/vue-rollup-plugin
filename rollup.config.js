import { pascalCase } from 'pascal-case'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'

const name = pascalCase(pkg.name)

export default {
  input: 'src/index.js',
  output: [
    { name, exports: 'named', file: pkg.unpkg, format: 'iife' },
    { name, file: pkg.module, format: 'es' },
    { name, exports: 'named', file: pkg.main, format: 'umd' },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    vue(),
    css({
      output: function (styles) {
        writeFileSync(pkg.style, new CleanCSS().minify(styles).styles)
      },
    }),
    esbuild({ minify: true }),
    filesize(),
  ],
}
