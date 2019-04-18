import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '../utils/index'
import api from '../utils/api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userData: {},
    readList: {},
  },
  mutations: {
    'CHANGE_USERDATA'(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    getUserData(context) {
      fetch.get(api.getUser).then(res => {
        context.commit('CHANGE_USERDATA',res.data)
      })
    },
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key,value) => sessionStorage.setItem(key,value),
      removeItem: key => sessionStorage.removeItem(key)
    }
  })]
})

export default store
