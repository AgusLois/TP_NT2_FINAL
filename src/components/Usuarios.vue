<template>

  <section class="src-components-usuario">
    <h1>Listado de usuarios</h1>
    <button class="btn btn-success my-3 mr-3" @click="getPostsUsers()">Pedir usuarios</button>
     <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>id</th>
          <th>email</th>
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </table>
      <h4 class="alert alert-primary">Se encontraron {{usuarios.length}} usuarios</h4>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron Usuarios</h4>
  </section>

</template>

<script>
  import axios from 'axios'
  export default  {
    name: 'src-components-usuario',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuarios:[],
        url:'https://62842ba33060bbd3473556b1.mockapi.io/users'
      }
    },
    methods: {
       async getPostsUsers(){
   /*   
      let {data} = await axios.get('/users').then(response =>{
      console.log(response)
    this.usuarios=data
    }).catch(error=>{
        console.log("Error Axios", error)
      })
    } */
    try{
      let {data} = await axios(this.url)
      this.usuarios=data
      }catch(error){
         console.log("Error Axios", error)
      }
      }
    },
    computed: {
      /*  try{
      let {data} = await this.axios(this.url)
      this.posts=data
      }catch(error){
         console.log("Error Axios", error)
      } */

    }
}


</script>

<style scoped lang="css">
  .src-components-usuario {

  }
</style>
