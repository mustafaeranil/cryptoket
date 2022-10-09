<template>
  <footer class="app-footer">
    <div class="app-container">
      <div class="app-footer__wrapper">
        <div class="app-footer__info">
          <AppLogo :showTextOnMobile="true" />
          <div class="app-footer__info-text">Get the lastes Updates</div>
          <div class="app-footer__subscribe">
            <AppTextbox
              v-model="email"
              placeholder="Your Email"
              class="app-footer__input"
            />
            <AppButton>Email Me!</AppButton>
          </div>
        </div>
        <div class="app-footer__links">
          <div
            v-for="group in fastLinks"
            :key="group.id"
            class="fast-link__group"
          >
            <div class="fast-link__title">
              {{ group.title }}
            </div>
            <div class="fast-link__items">
              <a
                v-for="fastLink in group.childs"
                :key="fastLink.id"
                :href="fastLink.url"
                class="fast-link__item"
              >
                {{ fastLink.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer__bottom">
      <div class="app-container">
        <div class="app-footer__bottom-wrapper">
          <div class="app-footer__copyright">
            CrpytoKet, Inc. All Rights Reserved
          </div>
          <div class="app-footer__social">
            <a class="app-footer__social-item" href="#">
              <SvgIcon name="instagram" />
            </a>
            <a class="app-footer__social-item" href="#">
              <SvgIcon name="twitter" />
            </a>
            <a class="app-footer__social-item" href="#">
              <SvgIcon name="telegram" />
            </a>
            <a class="app-footer__social-item" href="#">
              <SvgIcon name="twitch" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from "./AppLogo.vue"
import AppTextbox from "./AppTextbox.vue"
import AppButton from "./AppButton.vue"
import SvgIcon from "./SvgIcon.vue"
import { mapState } from "vuex"

export default {
  components: {
    AppLogo,
    AppTextbox,
    AppButton,
    SvgIcon
  },
  data() {
    return {
      email: ""
    }
  },
  computed: {
    ...mapState("app", ["fastLinks"])
  }
}
</script>

<style lang="postcss">
.app-footer {
  @apply flex flex-wrap justify-center border-t border-grey-100 dark:border-dark-100;

  &__wrapper {
    @apply grid grid-cols-1 gap-6 py-6 px-2.5 lg:grid-cols-2 lg:px-5 lg:py-8;
  }

  &__info {
    @apply flex flex-col gap-6;
  }

  &__info-text {
    @apply font-semibold text-dark-100 dark:text-white;
  }

  &__subscribe {
    @apply flex;
  }

  &__input {
    @apply -mr-6 max-w-[280px];
  }

  &__links {
    @apply grid grid-cols-2;
  }

  &__bottom {
    @apply flex w-full justify-center border-t border-grey-100 dark:border-dark-100;

    &-wrapper {
      @apply flex flex-col items-center gap-6 py-6 px-5 lg:flex-row lg:justify-between lg:gap-0 lg:py-8;
    }
  }

  &__copyright {
    @apply font-semibold text-dark-100 dark:text-white;
  }

  &__social {
    @apply flex justify-center gap-5 lg:justify-end;

    &-item {
      @apply text-dark-200 dark:text-white;
    }
  }
}

.fast-link {
  &__group {
    @apply flex flex-col;
  }

  &__title {
    @apply mb-6 text-xl font-semibold text-dark-100 dark:text-white;
  }

  &__items {
    @apply flex flex-col gap-3;
  }

  &__item {
    @apply text-grey-300 dark:text-grey-100;
  }
}
</style>
