import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Usuarios from '../components/Usuarios.vue'
import Reporte from '../components/Reporte.vue'
import FormularioAlta from '../components/FormularioAlta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/reporte',
    name: 'Reporte',
    component: Reporte
  },


  {
    path: '/formularioAlta',
    name: 'FormularioAlta',
    component : FormularioAlta
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
