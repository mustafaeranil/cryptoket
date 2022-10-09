import Vue from "vue"
import Vuex from "vuex"
import sellers from "./sellers"
import bids from "./bids"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sellers,
    bids
  }
})
