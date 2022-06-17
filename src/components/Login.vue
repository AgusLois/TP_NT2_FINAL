<template>
  <div id="formContent">

    <div class="divlogin">
  
      <div class="container">
      
        <div class="divcontent">

          <h3>{{(type == 0)? 'Login': 'Registro'}}</h3>

          <form v-on:submit.prevent="login">

            <input type="email" class="form-control" placeholder="Email" v-model="email" required>
            <input type="password" class="form-control" placeholder="Contraseña" v-model="password" required>
            <input type="password" v-if="type==1" class="form-control" placeholder="Repetir contraseña" v-model="password2" required>

            <button class="btn btn-outline-dark mb-2" v-if="type==0" v-on:click="login">Iniciar Sesión</button>
            <button class="btn btn-outline-dark mb-2" v-if="type==1" v-on:click="registro">Registrar</button>

            <br>

            <a href="javascript:void(0)" @click="type=1" v-if="type!=1">Registrate aquí</a>
            <a href="javascript:void(0)"  @click="type=0" v-if="type!=0">Sign in</a>

          </form>
    
          <div class="alert alert-danger" role="alert" v-if="error">
            {{error_msg}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'



export default {
  name: 'Login',
  components: {

  },
  data: function(){
    return {
      type: 0,
      email: "",
      password: "",
      password2: "",
      error: false,
      error_msg: "",
    }
  },
  methods:{
    login(){
        
      let json = {
        email : this.email,
        password : this.password,
      }

         axios.get('/users').then(response =>{
            let usuarios=response.data

            let usuarioFinal = null

            usuarios.map(function(user){
                if(user.email == json.email && user.password == json.password){
                   usuarioFinal = user
                }
            })
          
            if(usuarioFinal != null){
                 this.$router.push('dashboard')
            }else{
                this.error = true;
                this.error_msg = "Datos incorrectos";
            }
            
        }).catch(error =>{
        console.log(error)
       })

  },

  registro(){
  
    let json = {
        email : this.email,
        password : this.password,
      }
    console.log("creo user")
    axios.post('/users', json).then(response => {
        console.log(response)
          this.$router.push('dashboard')
      })
       .catch(error =>{
        console.log(error)
       })
       }
}
}

</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

html,body{
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100vh;
    font-family: "Roboto";
    color: #333;
}

.divlogin{
    background: url("../assets/img/fondo.jpg") no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100vh;
    display: flex;
    align-content: center;
    align-items: center;
}

.divlogin .container{
    width: 100%;
    text-align: center;
}

 .divlogin .container .divcontent{
    width: 100%;
    max-width: 300px;
    background: rgba(255,255,255,0.7);
    padding: 20px;
    border-radius: 10px;
    display: inline-block;
}

 .divlogin .container .divcontent h3{
    margin-bottom: 20px;
}

 .divlogin .container .divcontent input{
    height: 40px;
    margin: 0px;
    border: 0px;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    width: 90%;
    margin-bottom: 15px;
}


</style>

