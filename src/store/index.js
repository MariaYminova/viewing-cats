import { createStore } from 'vuex'
import moduleLike from './moduleLike'

const store = createStore({
  modules: {
    moduleLike
  },
  state: {
    catImg: [],
    breedsLoading: false,
    breedsError: false,
    breeds: []
  },
  mutations: {
    setCatImg(state, data) {
      state.catImg = data
    },
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
    async getCatImg({ commit }, breedId) {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`,
        {
          headers: {
            'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
          }
        }
      )

      const data = await response.json()
      commit('setCatImg', data)
    },
    async getBreeds({ state, commit }) {
      commit('setBreedsError', false)
      commit('setBreedsLoading', true)

      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
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
