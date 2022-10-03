<script setup>
defineProps({
  padding: {
    type: String,
    default: 'p-4'
  },
  maxWidth: {
    type: String,
    default: 'max-w-7xl'
  }
})
</script>

<template lang="pug">
.card(:class="[padding, maxWidth]")
  slot
</template>

<style lang="scss" scoped>
.card {
  @apply bg-white rounded border border-slate-200 w-5/6 mx-auto;
}
</style>