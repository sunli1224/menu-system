import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import axios from 'axios'
import VueCookie from 'vue-cookies'
// import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueCookie);
Vue.prototype.$axios = axios;
// Vue.use(VueAxios, $axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path === '/login'){
//     next();
//   }else{
//     alert("您还未登录");
//     next("/login");
//   }
// });

// router.afterEach((to,from)=>{
//   alert("后置钩子函数");
// });
