/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-01 15:02:00
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-01 15:49:33
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './routes.js'

Vue.use(VueRouter)


const RouterConfig = {
  // mode: history,
  routes : Routers
}
const router = new VueRouter(RouterConfig)


export default router