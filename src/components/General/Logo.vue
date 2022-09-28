<script setup>
defineProps({
  mode: {
    type: String,
    default: 'light'
  },
  width: {
    type: String,
    default: 'w-auto'
  }
})
</script>

<template lang="pug">
div.logo(:class="width")
  img(v-if="mode == 'light'" src="/img/Logo.png" alt="logo")
  img(v-if="mode == 'dark'" src="/img/Logo-white.png" alt="logo")
</template>

<style lang="scss" scoped>
.logo {
  @apply flex items-center;
}
</style>