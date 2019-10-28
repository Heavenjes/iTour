import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
  template: '<router-view></router-view>'
}).$mount('#app');