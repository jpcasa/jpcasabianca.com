<script setup>
defineProps({
  mode: {
    type: String,
    default: 'light'
  }
})
</script>

<template lang="pug">
div.logo
  img(v-if="mode == 'light'" src="/img/Logo.png" alt="logo")
  img(v-if="mode == 'dark'" src="/img/Logo-white.png" alt="logo")
</template>

<style lang="scss" scoped></style>