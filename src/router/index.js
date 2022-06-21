import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Usuarios from '../components/Usuarios.vue'
<<<<<<< HEAD
import Reporte from '../components/Reporte.vue'
=======
import FormularioAlta from '../components/FormularioAlta.vue'
>>>>>>> f58e252b4db4134302feded703d03b83eee5ab25

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
<<<<<<< HEAD
  {
    path: '/reporte',
    name: 'Reporte',
    component: Reporte
=======



  {
    path: '/formularioAlta',
    name: 'FormularioAlta',
    component : FormularioAlta
>>>>>>> f58e252b4db4134302feded703d03b83eee5ab25
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
