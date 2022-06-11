import { createStore } from 'vuex'
import { UserModule } from './user'
export default createStore({
  state: {},
  getters: {
  },

  // Mutations are functions that effect the state
  mutations: {},

  // Actions are functions that you call throughout your application. they call mutations
  actions: {},
  modules: {
    User: UserModule
  }
})
