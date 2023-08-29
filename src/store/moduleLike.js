import queryString from "query-string"

export default {
  namespaced: true,
  state: {
    userId: localStorage.getItem('user_id') || '',
    likeList: [],
    isLoading: false
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId
      localStorage.setItem('user_id', userId)
    },
    setLike(state, payload) {
      state.likeList = payload
    },
    addLike(state, payload) {
      state.likeList.push(payload)
    },
    removeLike(state, id) {
      state.likeList = state.likeList.filter((i) => i.id != id)
    }
  },
  actions: {
    generateAndSetUserId({ commit }) {
      const timestamp = Date.now().toString(16)
      const randomPart = Math.floor(Math.random() * 1000000).toString(16)
      const userId = `${timestamp}-${randomPart}`
      commit('setUserId', userId)
    },
    async addLike({ commit, state }, imgId) {
      if (state.isLoading) {
        return
      }

      const rawBody = JSON.stringify({
        image_id: imgId,
        sub_id: state.userId
      })

      const response = await fetch('https://api.thecatapi.com/v1/favourites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
        },
        body: rawBody
      })
      const { id } = await response.json()

      commit('addLike', {
        id,
        image_id: imgId
      })
    },
    async delLike({ state, commit }, favId) {
      if (state.isLoading) {
        return
      }

      const response = await fetch(`https://api.thecatapi.com/v1/favourites/${favId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
        }
      })

      if (response.ok) {
        commit('removeLike', favId)
        console.log('Изображение удалено из избранного.')
      } else {
        console.error('Произошла ошибка при удалении из избранного.')
      }
    },
    async getLikeCat({ commit, state }) {
      const params = queryString.stringify({
        sub_id: state.userId
      })

      const response = await fetch('https://api.thecatapi.com/v1/favourites?' + params, {
        headers: {
          'content-type': 'application/json',
          'x-api-key': 'live_KFpgScJqF1t6NLPSMjvE7Ot615bVsArzsbnXqnJ1Oh8BetSYzB48dZjdrBTPKc96'
        }
      })

      const like = await response.json()
      commit('setLike', like)
    }
  }
}
