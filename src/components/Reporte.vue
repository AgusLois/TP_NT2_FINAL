<template>
    <section class="src-components-reporte" :style="{backgroundColor:colorDeFondo,color:colorDeTexto}">
        <hr>
        <h1>Reporte de productos</h1>
        <div v-for="(p, sucursal) in productos" v-bind:key="sucursal">

            <h3>Sucursal {{ sucursal }}</h3>
            <div v-if="p.length" class="table">
                <table class="table table-light">

                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr v-for="(producto,index) in p" :key="index">
                        <td>{{ producto.Nombre }}</td>
                        <td>{{ producto.Cantidad }}</td>
                    </tr>
                   

                </table>
            </div>
            <h4 v-else class="alert alert-danger text-center">No se encontraron productos en esta sucursal</h4>
            

        </div>

        <div>
            <table class="table table-dark">
                    <tr>
                        <td>Cantidad total de Productos : </td>
                        <td class="btn btn-success" @click="contarProductos"> {{mostrarCantidadTotal}}</td> 
                    </tr>
            </table>
        </div>


    </section>
</template> 

<script>
import axios from 'axios'
export default {
    name: 'src-components-usuario',
    props: ["colorDeFondo","colorDeTexto"],
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


    },
        computed: {
            mostrarCantidadTotal(){
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
</style>