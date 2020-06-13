import MojeVue from 'vue'
import VueRouter from 'vue-router'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import App from './components/App'
import Todos from './components/Todos'
import './index.html'
import { firestorePlugin } from 'vuefire'

MojeVue.use(firestorePlugin)

MojeVue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/page1', component: Page1 },
		{ path: '/page2', component: Page2 },
		{ path: '/todos', component: Todos },
	],
})

new MojeVue({
	el: '#app',
	router: router,
	render: (h) => h(App),
})
