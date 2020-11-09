import component from './VueBase.vue'

// Declare install function excuted by Vue.use()
function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(component.name, component)
}

const plugin = { install }

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

GlobalVue && GlobalVue.use(plugin)

export default plugin
