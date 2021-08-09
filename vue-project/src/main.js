import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(VueRouter);
const routes=[
	{
		path: '/About',
		name: 'About',
		component: About
	},
	{
		path: '/Contact',
		name: 'Contact',
		component: Contact
	}
]
const router = new VueRouter({
	routes
})


Vue.config.productionTip = false

new Vue({
	router: router,
  render: h => h(App),
}).$mount('#app')
