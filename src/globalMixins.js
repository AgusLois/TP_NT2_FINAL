import Vue from 'vue'

const mixinsGlobales ={

        methods:{
                contarProductos(){
            
                        this.$store.dispatch('contar')
                        console.log('LOS PRODUCTOS',this.productos)
                    
                }  
        }
               
    
  
}

Vue.mixin(mixinsGlobales)