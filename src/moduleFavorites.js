export default {
  state: {
    userId: localStorage.getItem('user_id') || ''
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId
      localStorage.setItem('user_id', userId)
    }
  },
  actions: {
    generateAndSetUserId({ commit }) {
      const timestamp = Date.now().toString(16)
      const randomPart = Math.floor(Math.random() * 1000000).toString(16)
      const userId = `${timestamp}-${randomPart}`
      commit('setUserId', userId)
    }
  }
}
