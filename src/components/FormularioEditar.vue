<template>

  <section class="src-components-formulario-editar">
  <div class="jumbotron">
      <h2>Formulario de edicion de producto</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="editar(productoAEditar.id)">
    
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

      <hr>
     <!--  <p><u>formData</u></p>
      <pre>{{ formData }}</pre>

      <hr>
      <p><u>formState</u></p>
      <pre>{{ formState }}</pre>
 -->
    </div>
  </section>
   

</template>

<script>
  import axios from 'axios'
  export default  {
    name: 'src-components-formulario-alta',
     //RECIBO EL PRODUCTO A EDITAR Y LA LISTA DE PRODUCTOS  PARA USAR EL FINDINDEX()
    props: ['productoAEditar','listaProductos'],
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
        productos: this.listaProductos,
        seEdito: ''
        
       
      }
    },
    methods: {
      getInicialData() {
        return {
          codigo: this.productoAEditar.Codigo,
          nombre: this.productoAEditar.Nombre,
          precio: this.productoAEditar.Precio,
          cantidad: this.productoAEditar.Cantidad,
          sucursal: this.productoAEditar.Sucursal,
          categoria: this.productoAEditar.Categoria,
        }
      },

      async editar(proId){

        let productoEditado ={
          Codigo:this.formData.codigo,
          Nombre:this.formData.nombre,
          Precio:this.formData.precio,
          Cantidad:this.formData.cantidad,
          Sucursal:this.formData.sucursal,
          Categoria:this.formData.categoria,

        }

        try {
          let { data: prodEditado } = await axios.put(this.url+proId, productoEditado, {'content-type' : 'application/json'})
          console.log('AXIOS PUT producto', prodEditado)

          let index = this.productos.findIndex(p => p.id == prodEditado.id)
          if(index == -1) throw new Error('producto no encontrado')
          this.productos.splice(index, 1, prodEditado)  

          //EVENTO PARA MANDAR A CALSE PRODUCTO PARA INFORMAR Q SE EDITO (pone en vacio productoAditar) Y CIERRA LA VISTA DE EDICION
          this.$emit('editado', this.seEdito)
        }
        catch(error) {
          console.error('Error en editar()', error.message)
        }

      },


      cancelar(){
        this.formData = this.getInicialData()
        this.formState._reset()
      },

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