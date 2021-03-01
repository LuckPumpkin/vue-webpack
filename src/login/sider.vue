<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-01 16:56:27
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-01 17:41:52
-->
<template>
  <Menu active-name='1' theme='dark' width='auto'>
    <MenuItem v-for='item in menuData' :key='item.code' :name='item.code' :to='item.url'>
      <Icon type='item.icon'></Icon>
      <span>{{ item.label }}</span>
    </MenuItem>
  </Menu>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {code: 1, icon: 'ios-navigate', label: 'option1', url: '/first'},
        {code: 2, icon: 'ios-navigate', label: 'option2', url: '/first'},
        {code: 3, icon: 'ios-navigate', label: 'option3', url: '/first'},
        {code: 4, icon: 'ios-navigate', label: 'option4', url: '/first'},
        {code: 5, icon: 'ios-navigate', label: 'option5', url: '/first'},
      ]
    }
  }
}
</script>

<style type="less" scoped>

.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>