import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        unaVez: false,
        contadorProductos: 0,
        isAuthenticated: false,
        email: ''
    },
    actions: {

        async contar({ commit }) {
            console.log('entre')
            try {

                let { data } = await axios('https://62842ba33060bbd3473556b1.mockapi.io/Productos')
                this.productos = data
                console.log('CONTAR', this.productos)
                commit('contarProductos', this.productos)
            } catch (error) {
                console.log(error)
            }

        }
    },
    mutations: {

        contarProductos(state, productos) {

            if (!state.unaVez) {
                for (let p of productos) {
                    console.log(p.Cantidad)
                    state.contadorProductos += Number(p.Cantidad)
                    console.log('vuex', state.contadorProductos)
                    state.unaVez = true

                }
            }

        },

        setAuthenticated(state, value) {
            state.isAuthenticated = value;
        },

        setEmail(state, email) {
            state.email = email;
        },

        logout(state) {
            state.isAuthenticated = false;
            router.push('/');
        }

    },
})