COMPONENTES Y DISTRIBUCIÓN DE TAREAS

PRODUCTO
Id: int
Nombre: String
Precio: double
cant: int
Sucursal: String
Categoria: String

SUCURSAL
Id: int
productos: Array de productos
direccion: String

USUARIO
Id: int
Email: email
Password: password

-----------------
ROLES??????????? VEREMOS

-Barra de navegación(ABM producto, reportes, ABM sucursales)
-Formulario de productos con validaciones
-Reporte que muestre todos los productos totales entre todas las sucursales
-Filtrar productos por sucursal
-Busqueda de producto(por su categoria)
-Lista usuarios
-Busqueda de usuario

-----------------------
ROUTER
1- Hacer las rutas en la navbar
2- Incluir el router en el proyecto npm i vue-router
3-Crear en src el archivo router.js
4- Hacer los import dentro de router.js Ejemplo:

import Vue from 'vue'
import VueRouter from 'vue-router'

<--          Importar los componentes        -->
import Binding from './componentes/Binding.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect:'/binding'},
        import Vue from 'vue'
import VueRouter from 'vue-router'

import Binding from './componentes/Binding.vue'
import Estructuras from './componentes/Estructuras.vue'
import Atributos from './componentes/Atributos.vue'
import Contadores from './componentes/Contadores.vue'
import FormularioAv from './componentes/FormularioAv.vue'
import Formulario from './componentes/Formulario/IndexFormulario.vue'
import HttpClient from './componentes/HttpClient.vue'


Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect:'/binding'},
        { path: '/binding', component: Binding },
        { path: '/estructura', component: Estructuras },
        { path: '/atributos', component: Atributos },
        { path: '/contadores', component: Contadores },
        { path: '/formularioAv', component: FormularioAv },
        { path: '/formulario', component: Formulario },
        { path: '/httpClient', component: HttpClient }

    ]
})

    ]
})

