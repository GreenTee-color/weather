import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as Api from '@/api/service'
Vue.config.productionTip = false
Vue.prototype.$api=Api

Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
