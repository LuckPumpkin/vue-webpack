/*
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-01 15:42:35
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-01 17:41:39
 */

const routes = [
    {
      path: '/', 
      component: ()=> import('../login/login.vue'),
      children: [
        {
          path: '/first', 
          component: ()=> import('../firstPage/index.vue')
        }
      ]
    }
]

export default routes