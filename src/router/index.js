import Vue from 'vue'
import Router from 'vue-router'
import Entry from "../views/Entry";
import Login from '@/views/Login'
import Forget from '@/views/Forget'
import Mine from '@/views/Mine'
import NowSports from '@/views/NowSports'
import Train from "../views/Train";
import Vip from "../views/Vip";
import Search from "../views/Search";
import Trends from "../views/Trends";
import Recommend from "../views/Recommend";
import Square from "../views/Square";
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
      },
      {
          path:'/train',
          name:'Train',
          component:Train,
          redirect:'/recommend',
          children:[
              {
                  path:'/recommend',
                  name:'Recommend',
                  component:Recommend
              },
              {
                  path:'/square',
                  name:'Square',
                  component:Square
              }
          ]
      },
      {
          path:'/vip',
          name:'Vip',
          component:Vip
      },
      {
          path:'/search',
          name:'Search',
          component:Search
      },
      {
          path:'/trends',
          name:'Trends',
          component:Trends
      }


  ]
})
