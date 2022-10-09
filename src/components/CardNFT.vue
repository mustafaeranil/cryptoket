<template>
  <div class="card-nft">
    <div class="card-nft__pic">
      <img v-if="image" :src="image" :alt="name" />
    </div>
    <div class="card-nft__name">
      {{ name }}
    </div>
    <div class="card-nft__bottom">
      <div class="card-nft__price">
        <b>{{ price }} </b>{{ currency }}
      </div>
      <div class="card-nft__fav">
        <SvgIcon name="heart" class="mr-1 dark:text-dark-bg" />
        {{ favs }}
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue"
export default {
  components: {
    SvgIcon
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    price: {
      type: [String, Number],
      default: "0.00"
    },
    currency: {
      type: String,
      default: "ETH"
    },
    favs: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss">
.card-nft {
  @apply relative inline-flex flex-col rounded-lg p-3 pb-5 shadow-lg dark:bg-dark-300 dark:shadow-none lg:rounded-2.5xl;

  &__pic {
    @apply relative mb-4 h-36 w-full overflow-hidden rounded-lg bg-grey-100 lg:h-56 lg:rounded-2.5xl;

    & img {
      @apply absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 transform;
    }
  }

  &__name {
    @apply mb-2 text-sm font-semibold text-dark-200 dark:text-white;
  }

  &__bottom {
    @apply flex justify-between;
  }

  &__price {
    @apply text-xs text-dark-200 dark:text-white lg:text-sm;
  }

  &__fav {
    @apply flex items-center text-xs text-dark-200 dark:text-white;
  }
}
</style>
