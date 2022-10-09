<template>
  <div class="card-seller">
    <div class="card-seller__order">
      {{ order }}
    </div>
    <div class="card-seller__pic-container">
      <div class="card-seller__pic">
        <img v-if="picture" :src="picture" :alt="name" />
      </div>
      <div v-if="online" class="card-seller__check">
        <SvgIcon name="check" class="text-white" />
      </div>
    </div>
    <div class="card-seller__name">
      {{ name }}
    </div>
    <div class="card-seller__sales">
      <b>{{ sales }}</b>
      {{ currency }}
    </div>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue"

export default {
  name: "CardSeller",
  components: {
    SvgIcon
  },
  props: {
    order: {
      type: Number,
      default: 1
    },
    picture: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    sales: {
      type: [String, Number],
      default: 0
    },
    currency: {
      type: String,
      default: ""
    },
    online: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="postcss">
.card-seller {
  @apply relative inline-flex flex-col items-center rounded-2.5xl border border-grey-100 pt-8 pb-2 dark:border-dark-300 dark:bg-dark-300 lg:px-12 lg:pt-11 lg:pb-5;

  &__order {
    @apply absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-sm text-white lg:h-8 lg:w-8 lg:text-base;
  }

  &__pic-container {
    @apply relative mx-7 mb-1.5;
  }

  &__pic {
    @apply relative h-20 w-20 overflow-hidden rounded-full bg-grey-100;
  }

  &__check {
    @apply absolute bottom-0 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500;
  }

  &__name {
    @apply max-w-full px-2 text-center text-sm font-semibold text-dark-200 dark:text-white lg:text-base;
  }

  &__sales {
    @apply text-sm text-dark-200 dark:text-white lg:text-base;
  }
}
</style>
