<template>
  <div class="swiper top-sellers" ref="swiperEl">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(seller, index) in sellers"
        :key="seller.id"
      >
        <CardSeller
          :name="seller.name"
          :sales="seller.price"
          :order="index + 1"
          :currency="currency"
          :picture="seller.avatar"
        />
      </div>
    </div>
    <button
      class="swiper-button-prev top-sellers__button top-sellers__button--prev"
    >
      <SvgIcon name="chevron-left" />
    </button>
    <button
      class="swiper-button-prev top-sellers__button top-sellers__button--next"
    >
      <SvgIcon name="chevron-right" />
    </button>
  </div>
</template>

<script>
import CardSeller from "./CardSeller.vue"
import Swiper, { Navigation } from "swiper"
import SvgIcon from "./SvgIcon.vue"
import "swiper/css"

Swiper.use(Navigation)

export default {
  components: {
    CardSeller,
    SvgIcon
  },
  props: {
    sellers: {
      type: Array,
      default: () => []
    },
    currency: {
      type: String,
      default: "ETH"
    }
  },
  data() {
    return {
      swiper: null
    }
  },
  watch: {
    sellers: {
      handler() {
        console.log("test")
        this.swiper = new Swiper(".swiper", {
          spaceBetween: 10,
          slidesPerView: "auto",
          navigation: {
            nextEl: ".top-sellers__button--next",
            prevEl: ".top-sellers__button--prev",
            disabledClass: "top-sellers__button--disabled"
          },
          breakpoints: {
            1024: {
              spaceBetween: 22
            }
          }
        })
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="postcss">
.top-sellers {
  @apply relative w-full lg:px-4;

  &__button {
    @apply absolute top-0 bottom-0 z-10 my-auto hidden h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-dark-100  text-dark-100 dark:border-white dark:text-white lg:flex;

    &--prev {
      @apply left-0;
    }

    &--next {
      @apply right-0;
    }

    &--disabled {
      @apply hidden;
    }
  }

  & .swiper-slide {
    @apply !w-auto;
  }
}
</style>
