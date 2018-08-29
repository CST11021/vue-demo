<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="4">
        <img src="./assets/logo.png" style="height: 65px;">
      </el-col>
      <el-col :span="20">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <!--使用to属性写死的方式-->
            <router-link to="/" :exact="true" key="subItem">helloWorld</router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1"><router-link to="/showDialog" :exact="true" key="subItem">showDialog</router-link></el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <router-link :to="showButtonPath" :exact="true" key="subItem">showButton</router-link>
          </el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">跳转饿了么</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-submenu index="1-1">
              <span slot="title">选项1</span>
              <el-menu-item index="1-1-1">选项1-1</el-menu-item>
              <el-menu-item index="1-1-2">选项1-2</el-menu-item>
            </el-submenu>
            <el-menu-item-group>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view class="animated" style="height: 100%;"></router-view>
      </el-col>
    </el-row>
    <el-footer>涂鸦智能</el-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ShowButton from './components/ShowButton'
import AppMain from './components/layout/AppMain'
export default {
  components: {AppMain, ShowButton, HelloWorld},
  data () {
    return {
      activeIndex: '1',
      isCollapse: false,
      showButtonPath: '/showButton'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({path: '/showButton'})
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
a {
  text-decoration:none;
}
</style>
