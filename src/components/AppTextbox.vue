<template>
  <input
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
    class="app-textbox"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss">
.app-textbox {
  @apply w-full rounded-lg border border-grey-100 px-4 text-[0.625rem] outline-none placeholder:text-grey-200 dark:border-dark-200 dark:bg-dark-200 dark:placeholder:text-white;
}
</style>
