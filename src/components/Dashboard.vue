<template>
    <section class="dashboard ml-5">
        <br>

        <br>
        <h3 class="card-title">Bienvenido/a {{ mostrarEmail }}</h3>
        <hr>
        <br>


        <div class="row">
            <br>
            <div class="col">
                <div style="width: 20rem;">
                    <router-link to="/usuarios" class="card-body btn btn-outline-info btn-sm text-white m-1 mr-3 " href="#">
                            <img class="card-img-top" src="../assets/img/hacker.gif" width="100">
                            Usuarios                      
                    </router-link>
                </div>
            </div>
            <div class="col">
                <div style="width: 20rem;">
                    <router-link to="/productos" class="card-body btn btn-outline-info btn-sm text-white m-1 mr-3" href="#">
                            <img class="card-img-top" src="../assets/img/producto.gif" width="200">
                            Productos
                    </router-link>
                </div>
            </div>
            <div class="col">
                <div style="width: 20rem;">
                    <router-link to="/reporte/grey/black" class="card-body btn btn-outline-info btn-sm text-white m-1 mr-3" href="#">
                            <img class="card-img-top" src="../assets/img/presentacion.gif" width="200">
                            Reporte                       
                    </router-link>
                </div>
            </div>
        </div>


    </section>
</template>

<script>

export default {
    computed: {
        mostrarEmail() {
            let email = this.$store.state.email
            return email
        }
    }
}
</script>

<style scoped lang="css">
/* #item {
    display:flex;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: white
} */
.jumbotron {
    background-color: white;
}

.dashboard {
    background-color: white;
}
</style>