import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: 'John Doe',
        dogs: []

    },
    getters: {

    },
    mutations: {
        setDogs(state, dogs) {
            state.dogs = dogs
        }

    },
    actions: {

        // get all from api from https://dog.ceo/api/breeds/list/all  and set to state

        async getDogs({ commit }) {
            const res = await axios.get('https://dog.ceo/api/breeds/list/all')
            commit('setDogs', res.data.status)
        }



    }

})




