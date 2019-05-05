import Vue from 'vue'
import Router from 'vue-router'
import Entry from "../views/Entry";
import Login from '@/views/Login'
import Forget from '@/views/Forget'
import Mine from '@/views/Mine'
import NowSports from '@/views/NowSports'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
        redirect:'/nowSports',
      name: 'Entry',
      component: Entry,
    },
      {
          path:'/login',
          name:'Login',
          component:Login
      },
      {
          path:'/forget',
          name:'Forget',
          component:Forget

      },
      {
          path:'/mine',
          name:'Mine',
          component:Mine
      },
      {
          path:'/nowSports',
          name:'NowSports',
          component:NowSports
      }
  ]
})
