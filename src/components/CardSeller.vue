<template>
  <div class="card-seller">
    <div class="card-seller__order">
      {{ order }}
    </div>
    <div class="card-seller__pic-container">
      <div class="card-seller__pic">
        <img v-if="picture" :src="picture" :alt="name" />
      </div>
      <div class="card-seller__check"></div>
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
export default {
  name: "CardSeller",
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
    }
  }
}
</script>

<style lang="postcss">
.card-seller {
  @apply relative inline-flex flex-col items-center rounded-2.5xl border border-grey-100 px-12 pt-11 pb-5 dark:border-dark-300 dark:bg-dark-300;

  &__order {
    @apply absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-white;
  }

  &__pic-container {
    @apply relative mb-1.5;
  }

  &__pic {
    @apply relative h-20 w-20 overflow-hidden rounded-full bg-grey-100;
  }

  &__check {
    @apply absolute bottom-0 right-1 h-4 w-4 rounded-full bg-green-500;
  }

  &__name {
    @apply text-center font-semibold text-dark-200 dark:text-white;
  }

  &__sales {
    @apply text-dark-200 dark:text-white;
  }
}
</style>
