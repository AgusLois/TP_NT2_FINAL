<template >

  <section class="src-componentes-nav-bar" v-if="$store.state.isAuthenticated">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/dashboard">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>


      <!-- este boton es del boton hamburguesa -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">


          <li class="nav-item">
            <router-link to="/usuarios">
              <a class="btn btn-outline-secondary btn-sm text-white m-1" href="#">Usuarios</a>
            </router-link>
          </li>


          <li class="nav-item">
            <router-link to="/productos">
              <a class="btn btn-outline-secondary btn-sm text-white m-1" href="#">Productos</a>
            </router-link>
          </li>

          <li class="nav-item" >
            <router-link to="/reporte/grey/black">
              <a class="btn btn-outline-secondary btn-sm text-white m-1" href="#">Reporte</a>
            </router-link>
          </li>
          <span class="navbar-text" >
            Total de articulos: {{ this.$store.state.contadorProductos }}
          </span>
  >
          <li class="nav-item align-content-end">       
              <a href="#" class="btn btn-danger btn-sm text-white m-1" @click="$store.commit('logout')">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script >

export default {
  name: 'src-components-nav-bar',
  props: [],
  mounted() {

  },
  data() {
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
</style>
