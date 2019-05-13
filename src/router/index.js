import Vue from 'vue'
import Router from 'vue-router'
import Entry from "../views/Entry"
// import Home from '@/views/Home'
import Login from '@/views/Login'
import Forget from '@/views/Forget'
import My from '@/views/My'
import NowSports from '@/views/NowSports'

import Train from "../views/Train";
import Vip from "../views/Vip";
import Search from "../views/Search";
import Trends from "../views/Trends";
import Recommend from "../views/Recommend";
import Square from "../views/Square";
import Xieyi from '@/views/Xieyi'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'
import PageThree from '@/views/PageThree'
import PageFour from '@/views/PageFour'
import PageFive from '@/views/PageFive'
import PageSix from '@/views/PageSix'
import PageSeven from '@/views/PageSeven'
import PageEight from '@/views/PageEight'
import Mine from "../views/Mine";
import store from '../store'

import ActionLibrary from '../views/ActionLibrary'

import SearchAction from "../views/SearchAction";
import ActionLibraryList from "../views/ActionLibraryList";
import ActionDetail from "../views/ActionDetail";
import Buy from '@/views/Buy'
import Cart from '@/views/Cart'
import Detail from '@/views/Detail'
import Join from "../views/Join";
import Register from "../views/Register";

Vue.use(Router);
const routes = [
    {
        path: '/',
        redirect: '/nowSports',
        name: 'Entry',
        component: Entry,
        children: [
            {
                path: '/join',
                name: 'Join',
                component: Join,
                redirect:'/login',
                children:[
                    {
                        path: '/login',
                        name: 'Login',
                        component: Login
                    },
                    {
                        path: '/register',
                        name: 'Register',
                        component: Register
                    }
                ]
            },

            {
                path: '/Xieyi',
                name: 'Xieyi',
                component: Xieyi
            },
            {
                path: '/forget',
                name: 'Forget',
                component: Forget

            },
            {
                path: '/my',
                name: 'My',
                component: My,
                children: [
                    {
                        path: '/pageOne',
                        name: 'PageOne',
                        component: PageOne
                    },
                    {
                        path: '/pageTwo',
                        name: 'PageTwo',
                        component: PageTwo
                    },
                    {
                        path: '/pageThree',
                        name: 'PageThree',
                        component: PageThree
                    },
                    {
                        path: '/pageFour',
                        name: 'PageFour',
                        component: PageFour
                    },
                    {
                        path: '/pageFive',
                        name: 'PageFive',
                        component: PageFive
                    },
                    {
                        path: '/pageSix',
                        name: 'PageSix',
                        component: PageSix
                    },
                    {
                        path: '/pageSeven',
                        name: 'PageSeven',
                        component: PageSeven
                    },
                    {
                        path: '/pageEight',
                        name: 'PageEight',
                        component: PageEight
                    },
                    ]
            },
            {
                path: '/nowSports',
                name: 'NowSports',
                component: NowSports
            }

            ]
    },
    {
        path: '/mine',
        name: 'Mine',
        meta: {
            requireAuth: true,
        },
        component: Mine
    },
    {
        path: '/train',
        name: 'Train',
        component: Train,
        redirect: '/recommend',
        children: [
            {
                path: '/recommend',
                name: 'Recommend',
                component: Recommend
            },
            {
                path: '/square',
                name: 'Square',
                component: Square
            }
            ]
    },
    {
        path: '/vip',
        name: 'Vip',
        component: Vip
    },
    {
        path: '/search',
        name: 'Search',
        redirect: '/buy',
        component: Search,
        children: [
            {
                path: '/buy',
                name: 'Buy',
                component: Buy
            },



            ]
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },

    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/trends',
        name: 'Trends',
        component: Trends
    },
    {
        path:'/actionLibrary',
        name:'ActionLibrary',
        component:ActionLibrary
    },
    {
        path:'/actionLibraryList',
        name:'ActionLibraryList',
        component:ActionLibraryList
    },
    {
        path:'/searchAction',
        name:'SearchAction',
        component:SearchAction
    },
    {
        path:'/actionDetail',
        name:'ActionDetail',
        component:ActionDetail
    }



    ]
const router = new Router({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/join',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})


export default router
