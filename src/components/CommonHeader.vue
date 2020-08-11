<template>
  <header>
    <div class="l-content">
      <!-- 收缩按钮 -->
      <el-button plain icon="el-icon-menu" @click="collapseMenu" size="mini"></el-button>

      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{current.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="userImg" class="userImg">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data () {
    return {
      // 调用图片要用require
      userImg: require('../assets/images/user.png')
    }
  },
  methods: {
    collapseMenu () {
      this.$store.commit('collapseMenu')
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-breadcrumb {
    padding-left: 40px;
  }
}

.r-content {
  .userImg {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>


<style lang="scss">
/* 模版内部的样式不能用scope */
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
    .el-breadcrumb__inner:hover {
      cursor: pointer;
      color: #33aef0;
    }
  }
}
</style>