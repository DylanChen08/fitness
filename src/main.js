import Vue from 'vue'
import App from './App'

import store from './store'
import SVG from './helpers/svg.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.use(ElementUI)
App.mpType = 'app'
const app = new Vue({
    store,
    SVG,
    ...App,
})
app.$mount()
