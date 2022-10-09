<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonStyle: {
      type: String,
      default: "filled",
      validator(val) {
        return ["filled", "stroke"].includes(val)
      }
    }
  },
  computed: {
    buttonClasses() {
      return ["app-button", `app-button__${this.buttonStyle}`]
    }
  }
}
</script>

<style lang="postcss">
.app-button {
  @apply whitespace-nowrap rounded-xl px-7 py-2 text-center text-sm font-semibold;

  &__filled {
    @apply bg-gradient-to-r from-primary-200 to-primary-300 text-white;
  }

  &__stroke {
    @apply border border-primary-100 text-primary-100;
  }
}
</style>
