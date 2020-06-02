
const user = {
  namespaced: true,

  state: {
    user: null
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    userSignedIn (state, { user }) {
      state.user = user
    }
  },
  actions: {
    USER_SIGNED_IN ({ commit }, payload) {
      commit('userSignedIn', payload)
    }
  }
}

export default user
