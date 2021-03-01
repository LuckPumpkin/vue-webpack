/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-02-26 10:28:22
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-01 15:50:53
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ViewUi from 'view-design'
import 'view-design/dist/styles/iview.css'


// const root = document.createElement('div')
// document.body.appendChild(root)
Vue.use(ViewUi)

new Vue({
  el: '#app',
  router,
  render: (h)=> h(App)
});