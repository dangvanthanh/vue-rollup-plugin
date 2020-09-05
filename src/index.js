import VueBase from './VueBase.vue';

// Declare install function excuted by Vue.use()
export function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  Vue.component('VueBase', VueBase);
}

const plugin = { install };

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
