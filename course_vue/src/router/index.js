import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/Index')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('@/pages/List')
    }
  ]
})
