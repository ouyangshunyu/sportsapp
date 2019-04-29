import Vue from 'vue'
import Router from 'vue-router'
import Entry from "../views/Entry";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/entry',
      name: 'Entry',
      component: Entry
    }
  ]
})
