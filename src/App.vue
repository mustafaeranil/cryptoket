<template>
  <div id="app" class="dark:bg-dark-bg">
    <div
      class="mb-4 flex justify-center border-b border-[#E3E1E3] dark:border-dark-100 lg:mb-14"
    >
      <AppHeader class="w-full max-w-screen-xl" />
    </div>
    <section class="app-section">
      <div class="app-container">
        <HomeCover />
      </div>
    </section>
    <section class="app-section">
      <div class="app-container">
        <h2 class="section-header">Top Sellers</h2>
        <HomeTopSellers :sellers="sellers" />
      </div>
    </section>
    <section class="app-section">
      <div class="app-container">
        <h2 class="section-header">Hot Bids</h2>
        <HomeHotBids :bids="bids" />
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import HomeCover from "./components/HomeCover.vue"
import HomeTopSellers from "./components/HomeTopSellers.vue"
import HomeHotBids from "./components/HomeHotBids.vue"
import AppFooter from "./components/AppFooter.vue"
import { mapState, mapActions } from "vuex"
export default {
  name: "App",
  components: {
    AppHeader,
    HomeCover,
    HomeTopSellers,
    HomeHotBids,
    AppFooter
  },
  computed: {
    ...mapState("sellers", ["sellers"]),
    ...mapState("bids", ["bids"])
  },
  mounted() {
    this.fetchBids()
    this.fetchSellers()
  },
  methods: {
    ...mapActions("sellers", ["fetchSellers"]),
    ...mapActions("bids", ["fetchBids"])
  }
}
</script>

<style></style>
