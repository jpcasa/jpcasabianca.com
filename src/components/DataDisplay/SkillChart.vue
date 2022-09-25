<script setup>
const props = defineProps({
  datasets: {
    type: Array,
    default: [1, 2, 3, 4, 5]
  }
})

const datasetLength = computed(() => props.datasets.length)
</script>

<template lang="pug">
.skill-chart
  .chart-top
    .legend
      .legend-item(v-for="i in 10" :key="i")
        span {{ 11 - i }}
    .chart
      .chart-column(
        v-for="(row, i) in datasets"
        :key="i"
      )
        .chart-bar(:style="{ height: `${row.level * 10}%` }")
  .labels
    .label-grid
      .label-grid-item(v-for="(item, i) in datasets" :key="i")
        p {{ item.name }}
        img(:src="`/img/icons/${item.icon}.png`" alt="JP Casabianca Skill Icon")
</template>

<style lang="scss" scoped>
.chart-top {
  @apply flex;
}

.legend {
  @apply w-8 flex-none grid gap-3;

  span {
    @apply block text-xs text-slate-400;
  }
}

.chart-bar {
  transition: 0.4s all;
}

.labels {
  @apply ml-8 mt-4;  

  .label-grid-item {
    @apply text-center;

    p {
      @apply text-xs text-slate-500 mb-4;
    }

    img {
      @apply h-8 w-auto;
    }
  }
}

.chart,
.label-grid {
  @apply flex-auto grid gap-4;
  grid-template-columns: repeat(v-bind(datasetLength), minmax(0, 1fr));

  .chart-column {
    @apply bg-slate-100 rounded flex items-end opacity-60;

    .chart-bar {
      @apply bg-teal-500 rounded w-full;
    }
  }
}

.chart {
  @apply bg-cover bg-center;
  background-image: url('/img/bars.png');
}
</style>