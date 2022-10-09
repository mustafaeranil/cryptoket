<template>
  <div class="search-box">
    <SvgIcon name="search" class="search-box__icon" />
    <AppTextbox
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
import AppTextbox from "./AppTextbox.vue"
export default {
  name: "SearchBox",
  components: {
    SvgIcon,
    AppTextbox
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
    @apply h-full w-full pl-12;
  }
}
</style>
