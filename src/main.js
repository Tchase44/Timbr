import Vue from 'vue'
import VueRouter from 'vue-router'
//Componets
import Page from './Page.vue'
import Shop from './Shop.vue'
import Listing from './Listing.vue'
import About from './About.vue'
import Contact from './Contact.vue'

//Router for SPA
Vue.use(VueRouter)
const routes = [
	{path: '/', component: Listing},
	{path: '/shop/:id', component: Shop},
	{path: '/about', component: About},
	{path: '/contact', component: Contact}
]
const router = new VueRouter({
	routes,
	mode: 'history'
})

//The Vue instance/object
new Vue({
  el: '#app',
  router,
  render: h => h(Page)
})
