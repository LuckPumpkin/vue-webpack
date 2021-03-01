<!--
 * @Descripttion: 
 * @version: 
 * @Author: yanan.zhao
 * @Date: 2021-03-01 15:00:48
 * @LastEditors: yanan.zhao
 * @LastEditTime: 2021-03-01 18:26:52
-->
<template>
  <div id='main_div'>
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapside :collapsed-width='80' v-model='isCollapsed' :class='menuitemClasses'>
        <div class='logo'>
          <div class='logo_margin'>
            <!-- <img width='30px' height='30px' src='../../static/img/logo.png'/> -->
            <span class='fontColor'>pumpkinVueAdmin</span>
          </div>
        </div>
        <my-sider></my-sider>
      </Sider>
      <Layout>
        <Header>
        </Header>
        <Content class='br-margin'>
          <myBreadcrumb></myBreadcrumb>
          <div class="content-main">
            <router-view></router-view>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import mySider from './sider.vue'
import myBreadcrumb from './breadcrum.vue'
export default {
  name: "index",
  components: {
    mySider,
    myBreadcrumb
  },
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses() {
      return [
        'menu-item', this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  }
}
</script>

<style type="less" scoped>
#main_div {
  width: 100%;
  height: 100%;
}
.br-margin {
  margin-left: 16px;
}
.content-main {
  background-color: #fff;
  min-height: 400px;
}
.logo {
  width: 200px;
  height: 64px;
  border-bottom: 1px solid rgb(77, 66, 66) ;
}
.logo_margin {
  padding: 15px 0 0 15px;
}
.fontColor {
  color: #fff;
  display: inline-block;
  padding-left: 10px;
  font-size: 20px;
  vertical-align: top;
}
</style>