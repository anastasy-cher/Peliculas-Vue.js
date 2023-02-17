import { createStore } from 'vuex'

export default createStore({
  state: {
    user:"",
    password:"",
    users:[
      {
        nombre: "Fortu",
        password: "1234"
      },
      {
        nombre: "admin",
        password: "1234"
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
