import component from './Index.vue'

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

if (GlobalVue) {
  GlobalVue.use(plugin)
}

component.install = plugin;

export default component
