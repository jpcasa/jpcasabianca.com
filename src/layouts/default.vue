<script setup>
const route = useRoute()

const headerMode = computed(() => {
  if (route.path == '/') {
    return 'light'
  } else {
    return 'dark'
  }
})
</script>

<template lang="pug">
div
  TheHeader(:mode="headerMode")
  router-view
</template>

<style lang="scss" scoped></style>