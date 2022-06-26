<template>
    <section class="src-components-reporte container">
        <hr>
        <h1>Reporte de productos</h1>
        <table class="table table-light table-sm table-bordered">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody v-for="(p, sucursal) in productos" v-bind:key="sucursal">
                <tr class="sucursal">
                    <td colspan="2">Sucursal {{ sucursal }}</td>
                </tr>
                <tr v-for="(producto, index) in p" :key="index">
                    <td>{{ producto.Nombre }}</td>
                    <td>{{ producto.Cantidad }}</td>
                </tr>
            </tbody>
        </table>


    </section>
</template> 

<script>
import axios from 'axios'
export default {
    name: 'src-components-reporte',
    props: [],
    mounted() {
        this.productosPorSucursal()
    },
    data() {
        return {
            productos: [],
            url: 'https://62842ba33060bbd3473556b1.mockapi.io/Productos'
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


        computed: {

        },

    }
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
</style>