<template>

  <section class="src-components-formulario-alta">
  <div class="jumbotron">
      <h2>Formulario de alta de producto</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar">
    
        <!-- --------------------- -->
        <!--     Campo id producto    -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="id">Código de producto</label>
          <input 
            type="text"
            id="id"
            name="id" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.id" 
            required 
            :minlength="idMinLength"
            no-espacios
          />

          <!-- Mensajes de validación -->
          <field-messages name="id" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{idMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--    Campo Nombre de producto    -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
          />

          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--      Campo Precio      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="precio">Precio</label>
          <input 
            type="number"
            id="precio"
            name="precio" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.precio" 
            required 
            
           
          />

          <!-- Mensajes de validación -->
          <field-messages name="precio" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--    Campo Cantidad     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="cantidad">Cantidad</label>
          <input 
            type="text"
            id="cantidad"
            name="cantidad" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.cantidad" 
            required 
            :min="cantidadMin"
          />

          <!-- Mensajes de validación -->
          <field-messages name="cantidad" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">La cantidad mínima es {{cantidadMin}}</div>
            </field-messages>
        </validate>
        <br>


        <!-- --------------------- -->
        <!--    Campo Sucursal    -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="sucursal">Sucursal</label>
          <input 
            type="text"
            id="sucursal"
            name="sucursal" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.sucursal" 
            required 
            
          />

          <!-- Mensajes de validación -->
          <field-messages name="sucursal" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            </field-messages>
        </validate>
        <br>

          <!-- --------------------- -->
        <!--    Campo Categoria   -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="categoria">Categoría</label>
          <input 
            type="text"
            id="categoria"
            name="categoria" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.categoria" 
            required 
          
          />

          <!-- Mensajes de validación -->
          <field-messages name="categoria" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            </field-messages>
        </validate>
        <br>







        <!-- Botón de envío -->
        <button class="btn btn-success my-4 mr-3" :disabled="formState.$invalid">Enviar</button>
        <button class="btn btn-danger my-4 " @click="cancelar()">Cancelar</button>
      </vue-form>      

      <hr>
      <p><u>formData</u></p>
      <pre>{{ formData }}</pre>

      <hr>
      <p><u>formState</u></p>
      <pre>{{ formState }}</pre>

    </div>
  </section>
   

</template>

<script lang="js">
 import axios from 'axios'
  export default  {
    name: 'src-components-formulario-alta',
    props: [],
    mounted () {

    },
    data () {
        return {
        formState : {},
        formData : this.getInicialData(),
        idMinLength :3,
        cantidadMin: 1,
        url:'https://62842ba33060bbd3473556b1.mockapi.io/Productos',
        productos: []
       
      }
    },
    methods: {
      getInicialData() {
        return {
          id: '',
          nombre: '',
          precio: '',
          cantidad: '',
          sucursal: '',
          categoria: '',
        }
      },
     enviar() {
        //SPREAD OPERATOR -> obj = {a:1,b:2} -> ...obj -> a:1,b:2 -> { ...obj } -> Clon de obj
        //SPREAD OPERATOR -> array = [1,2] -> ...array -> 1,2 -> [...array ] -> Clon del array
        console.log({ ...this.formData })
        let productoNew ={
          codigo:this.id,
          nombre:this.nombre,
          precio:this.precio,
          cantidad:this.cantidad,
          sucursal:this.sucursal,
          categoria:this.categoria,
        }

      /*  try {
          let { data:producto} = await axios.post(this.url, productoNew, {'content-type' : 'application/json'})
          this.productos.push(productoNew)
          console.log('Post Axios',producto)
        }
        catch(error){
          console.error("error post", error.message)
        }*/

        axios.post('/Productos', productoNew).then(response => {
        console.log(response)
         
         })
        this.formData = this.getInicialData() //reste de los datos del vue-form
        this.formState._reset()   //reset de los estados del vue-form
      },

      cancelar(){
        this.formData = this.getInicialData()
        this.formState._reset()
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
    h2{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
