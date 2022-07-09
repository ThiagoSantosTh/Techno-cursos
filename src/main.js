import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PageLoading from './components/PageLoading.vue'

Vue.config.productionTip = false

//componente global
Vue.component('PageLoading', PageLoading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
