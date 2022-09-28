<script setup>
import { NSelect } from 'naive-ui'

defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  active: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['change'])

const clickedTab = tab => emit('change', tab)
</script>

<template lang="pug">
.tabs-cont
  .tabs
    .tab(
      v-for="(tab, i) in tabs"
      :key="i"
      :class="{ active: tab.value == active }"
      @click="clickedTab(tab.value)"
    )
      span {{ tab.label }}
  .tabs-mobile
    n-select(
      :options="tabs"
      v-model:value="active"
    )
</template>

<style lang="scss" scoped>
.tabs-mobile {
  @apply md:hidden w-full;
}

.tabs-cont {
  @apply w-full flex justify-center;
}

.tabs {
  @apply p-1 rounded bg-white border border-slate-200;
  @apply hidden md:inline-flex;

  .tab {
    @apply px-6 py-2 cursor-pointer border border-white rounded mr-1;
    @apply text-sm text-slate-500;

    &:hover {
      @apply bg-teal-100 text-teal-600 border-teal-600;
    }

    &:last-of-type {
      @apply mr-0;
    }
  }

  .tab.active {
    @apply bg-teal-100 text-teal-600 border-teal-600;
  }
}
</style>