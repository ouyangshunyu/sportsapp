// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import vueTouch from 'vue-plugin-touch';

import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(vueTouch);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
