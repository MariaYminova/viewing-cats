import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      apiKey: 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96',
      breedsLoading: false,
      breedsError: false,
      breeds: []
    }
  },

  mutations: {
    setBreedsLoading(state, payload) {
      state.breedsLoading = payload
    },

    setBreedsError(state, payload) {
      state.breedsLoading = payload
    },

    setBreeds(state, payload) {
      state.breeds = payload
    }
  },

  actions: {
    async getBreeds({ state, commit }) {
      commit('setBreedsError', false)
      commit('setBreedsLoading', true)

      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': state.apiKey
          }
        })
        const breeds = await response.json()

        commit('setBreeds', breeds)
      } catch (error) {
        commit('setBreedsError', true)
      }

      commit('setBreedsLoading', false)
    }
  }
})

export default store
