<template>

  <section class="src-components-usuario container">
    <div v-if="!productoAEditar" class="card mt-5">
    

      <div class="card-header">
        <h3 class="card-title">Listado de Productos</h3>
      </div>
      <div class="card-body">
        <div class="container-fluid mt-3" id="app">
          <input type="text" class="form-control" v-model="criterioDeBusqueda" placeholder="Búsqueda de productos...">
          <br>

                <div v-if="productos.length && !productoAEditar" class="table-responsive">
                  <table class="table table-striped ">
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Categoria</th>
                      <th></th>

                    </tr>
                    <tr v-for="(producto, index) in productosFiltrados" :key="index">
                      <td>{{ producto.id }}</td>
                      <td>{{ producto.Nombre }}</td>
                      <td>{{ producto.Precio | curremcy("$") }}</td>
                      <td>{{ producto.Cantidad }}</td>
                      <td>{{ producto.Categoria }}</td>
                      <td>
                        <button class="btn btn-outline-danger btn-sm mr-2" @click="eliminar(producto.id)">Eliminar</button>
                        <button class="btn btn-outline-primary btn-sm" @click="productoAEditar=producto">Editar</button>
                      </td>
                      </tr>

                  </table>
                  <h4 class="alert alert-secondary">Se encontraron {{ productosFiltrados.length }} productos</h4>
                </div>
                <h4 v-else class="alert alert-danger text-center">No se encontraron productos</h4>
        </div>

          

        </div>

    
    </div>
         <!--  USO LA COMUNICACION ENTRE CLASES A TRAVES DE PROPS Y EVENTOS -->
          <div v-if="productoAEditar">
            <editar :productoAEditar="productoAEditar" :listaProductos="productos" @editado="productoAEditar = $event">
            </editar>
          </div>
  </section>
  
</template>

<script>

  import editar from './FormularioEditar.vue'
  import axios from 'axios'
  export default  {
    
    name: 'src-components-productos',
    props: [],
    
    components:{
      editar
    },
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
        url:'https://62842ba33060bbd3473556b1.mockapi.io/Productos/',
        productoAEditar:''
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
      },
      async eliminar(id){
          console.log("delete productos", id)
           try{
            let {data:producto} = await axios.delete(this.url+id)
            console.log("AXIOS DELETE PRODUCTOS", producto)
            let index = this.productos.findIndex(prod => prod.id == producto.id)
            if(index == -1) throw new Error ("Producto no encontrado")
            this.productos.splice(index,1)
            }
            catch(error){
            console.log("Error en eliminar()", error.message)
            }
      },
      /*  async editar(id){
         console.log("put usuarios", id)
          try{

            let {data:usuario} = await this.axios.put(this.url+id, usuarioUpdate, {"content-type": "application/json"})
            console.log("AXIOS PUT USUARIOS", usuario)
            let index = this.usuarios.findIndex(user => user.id == usuario.id)
            if(index == -1) throw new Error ("Usuario no encontrado")
            this.usuarios.splice(index,1,usuario)
            }
            catch(error){
            console.log("Error en putUsuarios()", error.message)
            }

          } */

    },
    computed: {
      productosFiltrados() {
        return this.productos.filter((producto) => {
         let registroCompleto = `${producto.Id} ${producto.Nombre} ${producto.Categoria} `
         return registroCompleto.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase())
    });
    }
  },
}




</script>

<style scoped lang="css">
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
