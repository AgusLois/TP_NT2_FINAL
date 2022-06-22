<template >

   <section class="src-componentes-nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <router-link to="formularioAlta">
            <a class="navbar-brand" href="#">Inicio</a>
          </router-link>

          
      <!-- este boton es del boton hamburguesa -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

       
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
          
          <li class="nav-item">
            <router-link to="usuarios">
            <a class="nav-link" href="#">Usuarios</a>
            </router-link>
          </li>


          <li class="nav-item">
            <router-link to="productos">
            <a class="nav-link" href="#">Productos</a>
              </router-link>
          </li>

          <li class="nav-item">
            <router-link to="reporte">
            <a class="nav-link" href="#">Reporte</a>
              </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
