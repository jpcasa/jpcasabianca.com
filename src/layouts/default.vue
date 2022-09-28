<script setup>
const route = useRoute()

const mode = ref('dark')

const headerMode = computed(() => {
  return route.path == '/' ? 'light' : 'dark'
})

const setHeaderMode = () => {
  if (route.path == '/') {
    mode.value = 'light'
  } else {
    mode.value = 'dark'
  }
}

onMounted(() => {
  setHeaderMode()
})

watch(() => route.path, setHeaderMode())
</script>

<template lang="pug">
div
  TheHeader(:mode="headerMode")
  router-view
  TheFooter(v-if="headerMode == 'dark'")
</template>

<style lang="scss" scoped></style>