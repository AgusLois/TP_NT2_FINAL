<template>

  <section class="src-components-usuario">
    
    <hr>
    <h1>{{ "Listado de usuarios" | pasarAMayuscula}}  </h1>

    <div class="container-fluid mt-3" id="app">
    <input type="text" class="form-control" v-model="criterioDeBusqueda"
        placeholder="Búsqueda de usuarios...">
     <br>
         <div v-if="usuarios.length" class="table-responsive">
          <table class="table table-striped ">
              <tr>
                 <th>Id</th>
                 <th>Email</th>
              </tr>
              <tr v-for="(usuario,index) in personasFiltradas" :key="index">
                 <td>{{ usuario.id }}</td>
                 <td>{{ usuario.email  | pasarAMayuscula}}</td>
                  <button class="btn btn-danger mr-2" @click="eliminar(usuario.id)">ELIMINAR</button>
                 <button class="btn btn-primary" @click="editar(usuario.id)">EDITAR</button>
              </tr>
          </table>
           <h4 class="alert alert-primary">Se encontraron {{usuarios.length}} usuarios</h4>
         </div>
            <h4 v-else class="alert alert-danger text-center">No se encontraron Usuarios</h4>

  </div>

  </section>

</template>

<script>
  import axios from 'axios'
  export default  {
    name: 'src-components-usuario',
    props: [],
    mounted () {
      this.getPostsUsers()
    },
    data () {
      return {
        usuarios:[],
        criterioDeBusqueda: '',
        url:'https://62842ba33060bbd3473556b1.mockapi.io/users/'
      }
    },
    methods: {
       async getPostsUsers(){
      try{
      let {data} = await axios(this.url)
      this.usuarios=data
      }catch(error){
         console.log("Error Axios", error)
      }
      },
        async eliminar(id){
          console.log("delete usuarios", id)
           try{
         
            let {data:usuario} = await axios.delete(this.url+id)
            console.log("AXIOS DELETE USUARIOS", usuario)
            let index = this.usuarios.findIndex(user => user.id == usuario.id)
            if(index == -1) throw new Error ("Usuario no encontrado")
            this.usuarios.splice(index,1)
            } 
            catch(error){
            console.log("Error en eliminar()", error.message)
            }

       }
    },
    computed: {
      personasFiltradas() {
        return this.usuarios.filter((usuario) => {
         let registroCompleto = `${usuario.id} ${usuario.email}`
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
