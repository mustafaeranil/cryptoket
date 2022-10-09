import { api } from "@/api"

export default {
  state: {
    sellers: []
  },
  getters: {},
  mutations: {
    updateSellers: (state, sellers) => {
      state.sellers = sellers
    }
  },
  actions: {
    async fetchSellers({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .get("/sellers")
          .then((res) => {
            commit("updateSellers", res.data)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  namespaced: true
}
