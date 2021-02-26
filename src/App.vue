<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-02-26 10:25:51
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-02-26 18:56:44
-->
<template>
  <div id='app'>
    {{msg}}
    <img src="./assets/logo.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'my name is pumpkin'
    }
  }
}
</script>

<style scoped style='less'>
#app{
  color: red
}
</style>