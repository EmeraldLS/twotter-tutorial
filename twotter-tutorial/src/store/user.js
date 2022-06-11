export const UserModule = {
    namespaced: true,
    state: {
        user: null,
        twoot: {}
  },
  getters: {
  },

  // Mutations are functions that effect the state
  mutations: {
    SET_USER(state, user) {
      state.user = user
      },
      POST_TWOOT(state, twoot) {
          state.twoot = twoot
      }
  },

  // Actions are functions that you call throughout your application. they call mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
      },
      postTwoot({ commit }, twoot) {
          commit('POST_TWOOT', twoot)
      }
  },
}
