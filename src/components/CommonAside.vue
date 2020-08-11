<template>
  <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b">
    <h3 v-show="!isCollapse">后台管理系统</h3>
    <h3 v-show="isCollapse">后台</h3>
    <!-- 无分组 -->
    <el-menu-item :index="item.path" v-for="item in noChild" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>

    <!-- 有分组 -->
    <el-submenu :index="item.path" v-for="(item,index) in hasChild" :key="index">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group :index="subitem.path" v-for="(subitem,subindex) in item.children" :key="subindex">
        <el-menu-item :index="subitem.path" @click="clickMenu(subitem)">{{subitem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    hasChild () {
      return this.asideMenu.filter(item => item.children)
    },
    noChild () {
      return this.asideMenu.filter(item => !item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    }
  },
  data () {
    return {
      asideMenu: [
        {
          path: '/',
          label: '首页',
          name: 'home',
          icon: 's-home'
        },
        {
          path: '/video',
          label: '视频管理',
          name: 'video',
          icon: 'video-play'
        },
        {
          path: '/user',
          label: '用户管理',
          name: 'user',
          icon: 'user'
        },
        {
          path: '/setting',
          label: '设置',
          name: 'setting',
          icon: 'setting',
          children: [
            {
              path: '/page1',
              name: 'setting1',
              label: '设置1',
            },
            {
              path: '/page2',
              name: 'setting2',
              label: '设置2',
            },
          ]
        },
      ]
    }
  },
  methods: {
    clickMenu (item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 24px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>