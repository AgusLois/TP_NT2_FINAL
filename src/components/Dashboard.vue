<template>
    <section  class="dashboard ml-5" >
        <br>
        <div class="jumbotron">
            <h2>Bienvenido </h2>
        
        <br>

        <div >


            <table >
            <thead>
                <tr>
                    
                    <th>
                            <router-link to="/usuarios" >
                            <a class="btn btn-outline-secondary btn-sm text-white m-1 mr-3" href="#">
                            <img src="../assets/img/hacker.gif" width="200" >
                            Usuarios
                            </a>
                            </router-link>

                        
                        
                    </th>
                            <router-link to="/productos">
                            <a class="btn btn-outline-secondary btn-sm text-white m-1 mr-3" href="#">
                            <img src="../assets/img/producto.gif" width="200">
                            Productos</a>
                            </router-link>

                    <th>
                            <router-link to="/reporte">
                            <a class="btn btn-outline-secondary btn-sm text-white m-1" href="#">
                            <img src="../assets/img/presentacion.gif" width="200">
                            Reporte
                            </a>
                            </router-link>
                       
                       
                    </th>


                </tr>

            </thead>


        </table>

           
       </div>

      
        </div>
    </section>
</template>

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
    background-color:white;
}

</style>