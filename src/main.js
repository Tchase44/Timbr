import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './Page.vue'
import Shop from './Shop.vue'
import Listing from './Listing.vue'
import About from './About.vue'
import Contact from './Contact.vue'

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

new Vue({
  el: '#app',
  router,
  render: h => h(Page)
})
