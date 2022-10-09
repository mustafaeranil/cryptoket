<template>
  <div class="app-logo">
    <div class="app-logo__icon">
      <div class="app-logo__circle"></div>
    </div>
    <div :class="['app-logo__name', showTextOnMobile ? '' : 'hidden']">
      CryptoKet
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showTextOnMobile: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.app-logo {
  @apply flex items-center;

  &__icon {
    @apply flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-primary-200 to-primary-300;
  }

  &__circle {
    @apply h-[18px] w-[18px] rounded-full border-2 border-white dark:border-dark-200;
  }

  &__name {
    @apply ml-1 font-gotham text-lg font-bold text-dark-200 dark:text-white lg:block;
  }
}
</style>
