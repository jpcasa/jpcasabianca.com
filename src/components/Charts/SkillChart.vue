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
.skill-chart-mobile
  .chart
    .chart-row(
      v-for="(row, i) in datasets"
      :key="i"
    )
      .img
        img(:src="`/img/icons/${row.icon}.png`" alt="JP Casabianca Skill Icon")
      .chart-bar-cont
        .chart-bar(:style="{ width: `${row.level * 10}%` }")
      .label {{ row.level }}
</template>

<style lang="scss" scoped>
.skill-chart {
  @apply hidden md:block;

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
}

.skill-chart-mobile {
  @apply md:hidden;

  .legend-top {
    @apply flex justify-between ml-12;
  }

  .chart-row {
    @apply flex items-center mb-4;

    &:last-of-type {
      @apply mb-0;
    }

    .img {
      @apply flex-none mr-4 w-10 inline-flex justify-center;

      img {
        @apply h-8 w-auto;
      }
    }
    
    .chart-bar-cont {
      @apply flex-auto bg-slate-200 rounded;
    }

    .label {
      @apply flex-none ml-2 text-slate-500;
    }
    
    .chart-bar {
      @apply h-6 bg-teal-500 rounded;
    }
  }  

  .chart {
    .labels {
      @apply w-8 flex-none mr-4;

      img {
        @apply h-8 w-auto;
      }
    }
  }

  .chart-right {
    @apply bg-cover bg-center flex-auto;
    background-image: url('/img/bars-vertical.png');
  }
}
</style>