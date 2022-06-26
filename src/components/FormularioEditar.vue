<template>

  <section class="src-components-formulario-editar container">
  <div class="card mt-5">
    <div class="card-header">
      <h3 class="card-title">Formulario de Edición de Producto</h3>
    </div>
    <div class="card-body">
      <vue-form :state="formState" @submit.prevent="enviar">
    
           <!--     Campo id producto    -->
           <validate tag="div">
           <label for="codigo">Código de producto</label>
          <input 
            type="text"
            id="codigo"
            name="codigo" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.codigo" 
            required 
            :minlength="codigoMinLength"
            no-espacios
          />

          <!-- Mensajes de validación -->
          <field-messages name="codigo" show="$dirty">
             <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{codigoMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

      
        <!--    Campo Nombre de producto    -->
          <validate tag="div">
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
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          </field-messages>
        </validate>
        <br>

        <!--      Campo Precio      -->
         <validate tag="div">
          <label for="precio">Precio</label>
          <input 
            type="number"
            id="precio"
            name="precio" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.precio" 
            required 
            :min="cantidadMinPrecio"

            
           
          />

          <!-- Mensajes de validación -->
          <field-messages name="precio" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">No se aceptan numeros negativos</div>

            
          </field-messages>
        </validate>
        <br>

      
        <!--    Campo Cantidad     -->
      
        <validate tag="div">
          <label for="cantidad">Cantidad</label>
          <input 
            type="number"
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
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">La cantidad mínima es {{cantidadMin}}</div>
            </field-messages>
        </validate>
        <br>


      
        <!--    Campo Sucursal    -->
           <validate tag="div">
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
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            </field-messages>
        </validate>
        <br>

       
        <!--    Campo Categoria   -->
       
        <validate tag="div">
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
             <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            </field-messages>
        </validate>
        <br>

        <!-- Botones-->
        <button class="btn btn-success my-4 mr-3" :disabled="formState.$invalid">Enviar</button>
        <button class="btn btn-danger my-4 " @click="cancelar()">Cancelar</button>
      </vue-form>      
    </div>


     <!--  <p><u>formData</u></p>
      <pre>{{ formData }}</pre>

      <hr>
      <p><u>formState</u></p>
      <pre>{{ formState }}</pre>
 -->
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
        codigoMinLength :3,
        cantidadMin: 1,
        cantidadMinPrecio: 0,
        url:'https://62842ba33060bbd3473556b1.mockapi.io/Productos/',
        productos: []
       
      }
    },
    methods: {
      getInicialData() {
        return {
          codigo: '',
          nombre: '',
          precio: '',
          cantidad: '',
          sucursal: '',
          categoria: '',
        }
      },
     async enviar() {
      
        console.log({ ...this.formData })
        let productoNew ={
          Codigo:this.formData.codigo,
          Nombre:this.formData.nombre,
          Precio:this.formData.precio,
          Cantidad:this.formData.cantidad,
          Sucursal:this.formData.sucursal,
          Categoria:this.formData.categoria,
        }

        try {
          let { data:producto} = await axios.post(this.url, productoNew, {'content-type' : 'application/json'})
          this.productos.push(productoNew)
          console.log('Post Axios',producto)
        }
        catch(error){
          console.error("error post", error.message)
        }

        this.formData = this.getInicialData() 
        this.formState._reset()   
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