import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Usuarios from '../components/Usuarios.vue'
import Reporte from '../components/Reporte.vue'
import FormularioAlta from '../components/FormularioAlta.vue'
import FormularioEditar from '../components/FormularioEditar.vue'
import Productos from '../components/Productos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
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
  
    {path: "/reporte/:colorDeFondo/:colorDeTexto",
    name:"Reporte", 
    component: Reporte, 
    props:true
  },

  {
    path: '/formularioAlta',
    name: 'FormularioAlta',
    component : FormularioAlta
  },
  {
    path: '/productos',
    name: 'Productos',
    component : Productos
  },
  {
    path: '/formularioEditar',
    name: 'FormularioEditar',
    component : FormularioEditar
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
