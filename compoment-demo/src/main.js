// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入路由模块
import VueRouter from 'vue-router'
import App from './App'
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";

Vue.config.productionTip = false
//注明使用当前路由
Vue.use(VueRouter)

//配置路由组件
const router = new VueRouter(
  {
    routes: [
      {path: "/", component: Home},
      {path: "/helloworld", component: HelloWorld},
    ],
    mode: 'history'
  }
)

/* eslint-disable no-new */
new Vue({
  //使用router
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
