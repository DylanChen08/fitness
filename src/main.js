import Vue from 'vue'
import App from './App'

import store from './store'
import SVG from './helpers/svg.js'


Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    SVG,
    ...App
})
app.$mount()
