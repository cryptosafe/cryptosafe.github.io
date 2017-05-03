import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import '../node_modules/kickstart-node/css/kickstart.css'

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
	  { path: '/', component: App }
	]
})

new Vue({
  router: router
}).$mount('#app')


