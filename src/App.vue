<template>
  <div id="app" class="dark:bg-dark-bg">
    <div class="mb-4 flex justify-center border-b border-[#E3E1E3] lg:mb-14">
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
export default {
  name: "App",
  components: {
    AppHeader,
    HomeCover,
    HomeTopSellers,
    HomeHotBids,
    AppFooter
  },
  data() {
    return {
      //TODO: get sellers and bids from api
      sellers: [
        {
          id: 1,
          name: "Test Test",
          sales: "20.00",
          picture:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg"
        },
        {
          id: 2,
          name: "Test Test",
          sales: "20.00",
          picture:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg"
        },
        {
          id: 3,
          name: "Test Test",
          sales: "20.00",
          picture:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg"
        }
      ],
      bids: [
        {
          id: 1,
          name: "Test Test",
          price: "20.00",
          favs: 20
        },
        {
          id: 2,
          name: "Test Test",
          price: "20.00",
          favs: 20
        },
        {
          id: 3,
          name: "Test Test",
          price: "20.00",
          favs: 20
        }
      ]
    }
  }
}
</script>

<style></style>
