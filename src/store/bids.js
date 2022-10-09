import { api } from "@/api"

export default {
  state: {
    bids: []
  },
  getters: {},
  mutations: {
    updateBids: (state, bids) => {
      state.bids = bids
    }
  },
  actions: {
    async fetchBids({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .get("/bids")
          .then((res) => {
            commit("updateBids", res.data)
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
