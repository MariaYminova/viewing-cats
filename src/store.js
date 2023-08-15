import { createStore } from 'vuex'
import moduleFavorites from './ModuleFavorites'

const store = createStore({
  modules: {
    moduleFavorites
  },
  state: {
    catImg: [],
    breedsLoading: false,
    breedsError: false,
    breeds: [],
    
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
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`,
          {
            headers: {
              'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
            }
          }
        )

        const data = await response.json()

        commit('setCatImg', data)
      } catch (e) {}
    },
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
