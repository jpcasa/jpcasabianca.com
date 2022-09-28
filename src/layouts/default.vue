<script setup>
const route = useRoute()

const headerMode = computed(() => {
  return route.path == '/' ? 'light' : 'dark'
})
</script>

<template lang="pug">
div
  TheHeader(:mode="headerMode")
  router-view
  TheFooter(v-if="headerMode == 'dark'")
</template>

<style lang="scss" scoped></style>