import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.config.productionTip = false
import router from './router';
Vue.use(VueResource);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
