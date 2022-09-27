<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  barColor: {
    type: String,
    default: '#333333'
  }
})

const highlight = ref(0)

const gridColumns = computed(() => {
  return { 'grid-template-columns': `repeat(${props.items.length}, minmax(0, 1fr))` }
})

const toggleHighlight = () => {
  if (highlight.value < props.items.length - 1) {
    highlight.value++
  } else {
    highlight.value = 0
  }
}

onMounted(() => {
  setInterval(toggleHighlight, 3000)
})
</script>

<template lang="pug">
.info-tabs
  .info-tab-bar(:style="gridColumns")
    .info-tab-section(
      v-for="(i, j) in items"
      :key="j"
      :style="{ backgroundColor: j == highlight ? barColor : '#F1F5F9' }"
    )
  .info-grid(:style="gridColumns")
    .text-container(v-for="(item, i) in items" :key="i")
      p(:style="{ color: i == highlight ? barColor : '#002323' }")
        | {{ item.label }}
      span {{ item.copy }}
</template>

<style lang="scss" scoped>
.info-tab-bar {
  @apply grid bg-slate-100 rounded-full mb-6;
  height: 5px;

  .info-tab-section {
    @apply h-full rounded-full;
    transition: all 0.3s ease-in-out;
  }

  .active {
    @apply bg-teal-500;
  }
}

.info-grid {
  @apply grid gap-6 text-center;

  p {
    @apply text-teal-900 font-medium mb-3;
  }

  span {
    @apply text-sm text-slate-500;
  }
}
</style>