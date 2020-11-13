import Vue from 'vue'
import App from './App.vue'
import Base from '../src/Index.vue'

Vue.use(Base)

new Vue({
  render: h => h(App)
}).$mount('#app')