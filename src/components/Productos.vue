<template>

  <section class="src-components-usuario">
    
    <hr>
    <h1>{{ "Listado de productos" | pasarAMayuscula}}  </h1>

    <div class="container-fluid mt-3" id="app">
    <input type="text" class="form-control" v-model="criterioDeBusqueda"
        placeholder="Búsqueda de productos...">
     <br>
         <div v-if="productos.length" class="table-responsive">
          <table class="table table-striped ">
              <tr>
                 <th>Id</th>
                 <th>Nombre</th>
                 <th>Precio</th>
                 <th>Cantidad</th>
                 <th>Sucursal</th>
                 <th>Categoria</th>
                 <th>Codigo</th>

              </tr>
              <tr v-for="(producto,index) in productosFiltrados" :key="index">
                 <td>{{ producto.id }}</td>
                 <td>{{ producto.Nombre }}</td>
                 <td>{{ producto.Precio | curremcy("$")}}</td>
                 <td>{{ producto.Cantidad }}</td>
                 <td>{{ producto.Sucursal }}</td>
                 <td>{{ producto.Categoria }}</td>
                <td>{{ producto.Codigo }}</td>

              </tr>

          </table>
           <h4 class="alert alert-primary">Se encontraron {{productos.length}} productos</h4>
         </div>
            <h4 v-else class="alert alert-danger text-center">No se encontraron productos</h4>

  </div>

  </section>

</template>

<script>
  import axios from 'axios'
  export default  {
    name: 'src-components-productos',
    props: [],
    mounted () {
      this.getPostsProductos()
    },
        filters:{
      curremcy: function(value,signo){
        console.log(value,signo)
        return signo + (Number(value || 0).toFixed(2))
      }
    },
    data () {
      return {
        productos:[],
        criterioDeBusqueda: '',
        url:'https://62842ba33060bbd3473556b1.mockapi.io/Productos'
      }
    },
    methods: {
       async getPostsProductos(){
      try{
      let {data} = await axios(this.url)
      this.productos=data
      }catch(error){
         console.log("Error Axios", error)
      }
      }
    },
    computed: {
      productosFiltrados() {
        return this.productos.filter((producto) => {
         let registroCompleto = `${producto.Id} ${producto.Nombre} ${producto.Categoria} `
         return registroCompleto.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase())
    });
    }
    }
      }
  
  


</script>

<style scoped lang="css">
  h1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
