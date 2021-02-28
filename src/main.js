/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-02-26 10:28:22
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-02-26 19:38:59
 */
import Vue from 'vue'
import App from './App.vue'

// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
  // el: '#app',
  // // router,
  // template: '<App/>',
  // components: { App }
  render: (h)=> h(App)
}).$mount('#app');