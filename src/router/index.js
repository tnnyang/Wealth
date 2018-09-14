import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			component: resolve => require(['@/components/index'], resolve),
		},
		{
			path: '/fund',
			component: resolve => require(['@/components/fund'], resolve),
		},
		{
			path: '/trust',
			component: resolve => require(['@/components/trust'], resolve),
		},
		{
			path: '/insurance',
			component: resolve => require(['@/components/insurance'], resolve),
		},
		{
			path: '/account',
			component: resolve => require(['@/components/account'], resolve),
		},
		{
			path: '/question',
			component: resolve => require(['@/components/question'], resolve),
		}
	]
})
