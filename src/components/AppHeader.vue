<template>
  <div class="app-header">
    <AppLogo class="app-header__logo" />
    <SearchBox placeholder="Search item here" class="app-header__search" />
    <button class="app-header__open" @click="showMobileNavbar = true">
      <SvgIcon name="hamburger" />
    </button>
    <div :class="['header-fixed', showMobileNavbar ? 'flex' : 'hidden']">
      <div class="header-fixed__head">
        <AppLogo class="header-fixed__logo" />

        <button class="header-fixed__close" @click="showMobileNavbar = false">
          <SvgIcon name="times" />
        </button>
      </div>
      <AppNav class="header-fixed__nav" :navigations="navigations" />
      <div class="header-fixed__auth">
        <AppButton>Create</AppButton>
        <AppButton buttonStyle="stroke" class="lg:w-36">Connect</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "./AppLogo.vue"
import SearchBox from "./SearchBox.vue"
import SvgIcon from "./SvgIcon.vue"
import AppNav from "./AppNav.vue"
import AppButton from "./AppButton.vue"

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    SearchBox,
    SvgIcon,
    AppNav,
    AppButton
  },
  data() {
    return {
      showMobileNavbar: false,
      //TODO: move navigations to the store
      navigations: [
        {
          id: 1,
          title: "Explore",
          url: "#"
        },
        {
          id: 2,
          title: "My Items",
          url: "#"
        },
        {
          id: 3,
          title: "Following",
          url: "#"
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.app-header {
  @apply flex gap-2.5 py-4 px-2.5 lg:items-center lg:gap-5;

  &__logo {
    @apply flex-shrink;
  }

  &__search {
    @apply h-10 flex-grow;
  }

  &__open {
    @apply flex-shrink dark:text-white lg:hidden;
  }
}

.header-fixed {
  @apply fixed left-0 top-0 h-screen w-screen flex-col bg-white dark:bg-dark-bg lg:static lg:flex lg:h-auto lg:w-auto lg:flex-shrink lg:flex-row;

  &__head {
    @apply flex justify-between border-b border-grey-100 p-5 dark:border-dark-100 lg:hidden;
  }

  &__close {
    @apply flex-shrink dark:text-white;
  }

  &__nav {
    @apply flex-grow border-b border-grey-100 dark:border-dark-100  lg:border-none;
  }

  &__auth {
    @apply flex justify-center gap-2.5 py-5 px-7;
  }
}
</style>
