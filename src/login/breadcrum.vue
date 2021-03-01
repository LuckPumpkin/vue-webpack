<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-01 17:24:28
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-01 17:28:53
-->
<template>
  <Breadcrumb class='br_margin'>
    <BreadcrumbItem v-for='item in breadData' :key='item.url'>
      {{ item.label }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      breadData: [
        {url: '/', label: '首页'},
        {url: '/', label: '第二页'},
      ]
    }
  }
}
</script>

<style type="less" scoped>
.br_margin {
  margin: 16px 0;
}
</style>