import { writeFileSync } from 'fs'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import base from './rollup.config.base'
import pkg from '../package.json'

const config = Object.assign({}, base, {
  output: {
    name: pkg.name,
    file: pkg.module,
    format: 'es',
  },
})

config.plugins.push(vue())
config.plugins.push(
  css({
    output: function(styles) {
      writeFileSync(pkg.style, new CleanCSS().minify(styles).styles)
    },
  })
)

export default config
