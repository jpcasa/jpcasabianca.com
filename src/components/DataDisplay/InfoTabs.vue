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
.info-tabs-desktop
  .info-tab-bar(:style="gridColumns")
    .info-tab-section(
      v-for="(i, j) in items"
      :key="j"
      :style="{ backgroundColor: j == highlight ? barColor : '#0000001F' }"
    )
  .info-grid(:style="gridColumns")
    .text-container(v-for="(item, i) in items" :key="i")
      p(:style="{ color: i == highlight ? barColor : '#002323' }")
        | {{ item.label }}
      span {{ item.copy }}
.info-tabs-mobile
  .tab-mobile(v-for="(item, i) in items" :key="i")
    .tab-left(:style="{ backgroundColor: i == highlight ? barColor : '#0000001F' }")
      .tab-left-bar
    .tab-right
      p(:style="{ color: i == highlight ? barColor : '#002323' }")
        | {{ item.label }}
      span {{ item.copy }}
</template>

<style lang="scss" scoped>
.info-tabs-desktop {
  @apply hidden md:block;
  
  .info-tab-bar {
    @apply grid rounded-full mb-6;
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
  }
}

.info-tabs-mobile {
  .tab-mobile {
    @apply flex;

    .tab-left {
      @apply flex-none w-1 bg-black rounded-full;
    }

    .tab-right {
      @apply flex-auto py-4 ml-4;
    }
  }
}

.info-tabs-desktop,
.info-tabs-mobile {
  p {
    @apply text-teal-900 font-medium mb-3;
  }

  span {
    @apply text-sm text-slate-500;
  }
}
</style>