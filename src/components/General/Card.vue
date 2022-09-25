<script setup>
defineProps({
  padding: {
    type: String,
    default: 'p-4'
  }
})
</script>

<template lang="pug">
.card(:class="[padding]")
  slot
</template>

<style lang="scss" scoped>
.card {
  @apply bg-white rounded border border-slate-200;
}
</style>