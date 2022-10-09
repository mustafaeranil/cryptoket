<template>
  <nav class="app-nav">
    <a
      :href="nav.url"
      v-for="nav in navigations"
      :key="nav.id"
      class="app-nav__link"
    >
      {{ nav.title }}
    </a>
  </nav>
</template>

<script>
export default {
  props: {
    navigations: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="postcss" scoped>
.app-nav {
  @apply flex flex-grow flex-col py-1.5 lg:flex-shrink lg:flex-row lg:items-center;

  &__link {
    @apply px-4 py-2 font-semibold text-dark-200 dark:text-white lg:px-1.5 lg:py-0;
  }
}
</style>
