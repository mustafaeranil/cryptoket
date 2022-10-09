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
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import HomeCover from "./components/HomeCover.vue"
export default {
  name: "App",
  components: {
    AppHeader,
    HomeCover
  }
}
</script>

<style></style>
