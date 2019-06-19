// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routers from './routes'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

//全局自定义指令
// Vue.directive('color', {
//   bind(el, binding, vnode) {
//     el.style.color = "crimson";
//   }
// })

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1260px';
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px';
    }
    if (binding.arg === "column") {
      el.style.background = "#6677cc";
      el.style.padding = "20px";
    }
  }
})

//全局自定义过滤器
// Vue.filter('to-uppercase', (value) => {
//   return value.toUpperCase();
// })

Vue.filter('snippet', (value) => {
  return value.slice(0, 120) + '...';
})

//配置路由组件
const router = new VueRouter(
  {
    routes:Routers,
    mode: 'history'
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
