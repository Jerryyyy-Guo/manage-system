import Vue from "vue";
import VueRouter from "vue-router";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [{
  // 引入main布局
  path: '/',
  component: () => import('@/views/Main.vue'),
  children: [{
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/VideoManage/VideoManage.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserManage/UserManage.vue')
    },
    {
      path: '/setting1',
      name: 'setting1',
      component: () => import('@/views/Other/Other1.vue')
    },
    {
      path: '/setting2',
      name: 'setting2',
      component: () => import('@/views/Other/Other2.vue')
    },
  ]
}];

const router = new VueRouter({
  routes
});

export default router;