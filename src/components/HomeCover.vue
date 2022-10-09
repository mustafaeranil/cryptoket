<template>
  <div class="home-cover">
    <div class="home-cover__circle home-cover__circle--left"></div>
    <div class="home-cover__circle home-cover__circle--right"></div>
    <div class="home-cover__text">
      Discover, collect, and sell extraordinary NFTs
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCover"
}
</script>

<style lang="postcss">
.home-cover {
  @apply relative flex h-36 w-full items-center overflow-hidden rounded-3xl bg-gradient-to-r from-primary-200 to-primary-300 lg:h-[300px];

  &__circle {
    @apply absolute h-24 w-24 rounded-full bg-white opacity-20 lg:h-80 lg:w-80;

    &--left {
      @apply -left-12 -top-12 lg:-left-40 lg:-top-40;
    }
    &--right {
      @apply -right-7 -bottom-7 lg:-right-9 lg:-bottom-32;
    }
  }

  &__text {
    @apply px-5 font-gotham text-xl font-bold leading-none text-white lg:max-w-3xl lg:px-14 lg:text-5xl;
  }
}
</style>
