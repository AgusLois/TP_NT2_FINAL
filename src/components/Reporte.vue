<template>
    <section class="src-components-reporte container" :style="{ backgroundColor: colorDeFondo, color: colorDeTexto }">
        <div class="card mt-5">
            <div class="card-header">
                <h3 class="card-title-dark">Reporte de Productos</h3>
            </div>
            <div class="card-body">
                <table class="table table-light table-sm table-bordered">
                    <tbody v-for="(p, sucursal) in productos" v-bind:key="sucursal">
                        <tr class="sucursal">
                            <td colspan="2">Sucursal {{ sucursal }}</td>
                        </tr>
                        <tr class="cabecera-mini">
                            <td>Producto</td>
                            <td>Cantidad</td>
                        </tr>
                        <tr v-for="(producto, index) in p" :key="index">
                            <td>{{ producto.Nombre }}</td>
                            <td :style="{color: dameColor(producto.Cantidad).color}">
                       {{dameColor(producto.Cantidad).cantidad}}</td>
                        </tr>
                    </tbody>
                    <hr>
                    <tr>
                        <td>Presione el botón para calcular el total de productos: </td>
                        <td class="btn btn-outline-success" @click="contarProductos"> {{ mostrarCantidadTotal }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div>
        </div>
    </section>
</template> 

<script>
import axios from 'axios'
export default {
    name: 'src-components-reporte',
    props: ["colorDeFondo", "colorDeTexto"],
    mounted() {
        this.productosPorSucursal()



    },
    data() {
        return {
            productos: [],
            url: 'https://62842ba33060bbd3473556b1.mockapi.io/Productos',

        }
    },
    methods: {

        async productosPorSucursal() {
            const productos = {}
            const response = await axios.get('/Productos');

            response.data.map(producto => {
                if (!productos[producto.Sucursal]) {
                    productos[producto.Sucursal] = []
                }
                productos[producto.Sucursal].push(producto)
            })

            this.productos = productos;

            console.log(productos)
        },
         dameColor(cantidad){
          let color = ''
        if(cantidad <= 10) color = 'red'
        else if(cantidad > 10) color = 'green'
       
        return {
          cantidad,
          color
        }

         }
    },
    computed: {
        mostrarCantidadTotal() {
            let cantidadTotal = this.$store.state.contadorProductos
            return cantidadTotal
        }

    },

}



</script>

<style scoped lang="css">
h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.sucursal td {
    background: #ddd !important;
    font-weight: bold;
}

.cabecera-mini td {
    background: #eee !important;
    font-size: 0.9em;
}
h3{
    color: black;
}
</style>