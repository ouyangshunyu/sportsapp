import Vue from 'vue'
import Router from 'vue-router'
import Entry from "../views/Entry"
import Home from '@/views/Home'
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
import Xieyi from '@/views/Xieyi'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'
import PageThree from '@/views/PageThree'
import PageFour from '@/views/PageFour'
import PageFive from '@/views/PageFive'
import PageSix from '@/views/PageSix'
import PageSeven from '@/views/PageSeven'
import PageEight from '@/views/PageEight'
import My from "../views/My";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/nowSports',
            name: 'Entry',
            component: Entry,
            children: [
                {
                    path: '/login',
                    name: 'Login',
                    component: Login
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
            component: Search
        },
        {
            path: '/trends',
            name: 'Trends',
            component: Trends
        }


    ]
})
