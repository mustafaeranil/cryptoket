<template>
  <div class="card-nft">
    <div class="card-nft__pic"></div>
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
    }
  }
}
</script>

<style lang="postcss">
.card-nft {
  @apply inline-flex flex-col rounded-2.5xl p-3 pb-5 shadow-lg dark:bg-dark-300 dark:shadow-none;

  &__pic {
    @apply mb-4 h-56 w-52 rounded-2.5xl bg-grey-100;
  }

  &__name {
    @apply mb-2 text-sm font-semibold text-dark-200 dark:text-white;
  }

  &__bottom {
    @apply flex justify-between;
  }

  &__price {
    @apply text-xs text-dark-200 dark:text-white;
  }

  &__fav {
    @apply flex items-center text-xs text-dark-200 dark:text-white;
  }
}
</style>
