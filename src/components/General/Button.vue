<script setup>
// define props
defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
</script>

<template lang="pug">
button(:class="[type]")
  slot
</template>

<style lang="scss" scoped>
button {
  @apply inline-flex px-3 py-1 rounded text-sm;
}

button.primary {
  @apply text-white bg-teal-500 hover:bg-teal-600;
}

button.default {
  @apply text-white bg-teal-600;

  &:hover {
    background-color: #006335;
  }
}

button.secondary {
  @apply text-teal-500 border-teal-500 border;

  &:hover {
    @apply border-white text-white;
  }
}

button.dark {
  @apply text-white bg-teal-800 hover:bg-teal-900;
}
</style>