<template>
  <div class="search-box">
    <SvgIcon name="search" class="search-box__icon" />
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      class="search-box__input"
    />
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue"
export default {
  name: "SearchBox",
  components: {
    SvgIcon
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.search-box {
  @apply relative text-grey-200 dark:text-white;

  &__icon {
    @apply absolute left-4 top-0 bottom-0 my-auto;
  }

  &__input {
    @apply h-full w-full rounded-lg border border-grey-100 pl-12 text-[0.625rem] outline-none placeholder:text-grey-200 dark:border-dark-200 dark:bg-dark-200 dark:placeholder:text-white;
  }
}
</style>
