export default {
  namespaced: true,

  state: () => ({
    userId: localStorage.getItem('user_id') || '',
    favouritesList: [],
    isLoading: false
  }),

  mutations: {
    setUserId(state, userId) {
      state.userId = userId
      localStorage.setItem('user_id', userId)
    },

    setfavourites(state, payload) {
      state.favouritesList = payload
    },

    addFavorite(state, payload) {
      state.favouritesList.push(payload)
    },

    removeFavorite(state, id) {
      state.favouritesList = state.favouritesList.filter(i => i.id !== id)
    }
  },

  actions: {
    generateAndSetUserId({ commit }) {
      const timestamp = Date.now().toString(16)
      const randomPart = Math.floor(Math.random() * 1000000).toString(16)
      const userId = `${timestamp}-${randomPart}`
      commit('setUserId', userId)
    },

    async addfavourites({ commit, state }, imgId) {
      if(state.isLoading) {
        return
      }
      
      const rawBody = JSON.stringify({
        image_id: imgId,
        sub_id: state.userId
      })

      try {
        const response = await fetch('https://api.thecatapi.com/v1/favourites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
          },
          body: rawBody
        })
        const { id } = await response.json()

        commit('addFavorite', {
          id,
          image_id: imgId
        })

        console.log('Изображение добавлено в избранное. ID:', id)
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    },

    async delfavourites({ state, commit }, favId) {
      if(state.isLoading) {
        return
      }

      try {
        const response = await fetch(`https://api.thecatapi.com/v1/favourites/${favId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
          }
        })

        if (response.ok) {
          commit('removeFavorite', favId)
          console.log('Изображение удалено из избранного.')
        } else {
          console.error('Произошла ошибка при удалении из избранного.')
        }
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    },

    async getfavouritesCat({ commit }) {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/favourites', {
          headers: {
            'content-type': 'application/json',
            'x-api-key': 'live_XkZwFcyIs2SHsKR9rdMIRut68DSZSKUqYhVJGi5BMX7ICk55sHPYaR6GCRZkkPyH'
          }
        })

        const favourites = await response.json()
        commit('setfavourites', favourites)
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    }
  }
}
