import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
/* import Criancas from '../views/Criancas.vue'
import Estagiarios from '../views/Estagiarios.vue'
import Voluntarios from '../views/Voluntarios.vue'
import Login from '../views/Login.vue' */


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{notRenderMenu: true},
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
/*   {
    path: '/criancas',
    name: 'Criancas',
    component: Criancas
  },
  {
    path: '/estagiarios',
    name: 'estagiarios',
    component: Estagiarios
  },
  {
    path: '/voluntarios',
    name: 'voluntarios',
    component: Voluntarios
  }, */
]

const router = new VueRouter({
  routes
})

export default router
