<script setup>
import { RadarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

defineProps({
  chartData: {
    type: Object,
    default: () => ({
      labels: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React', 'Node', 'MongoDB', 'MySQL', 'PHP', 'Python'],
      datasets: [
        {
          data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
          backgroundColor: ['#E2FFF2BF'],
          borderColor: ['#08D777'],
          borderWidth: 3,
        }
      ]
    })
  }
})

const options = {
  responsive: true,
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 10,
      ticks: { display: false },
      grid: { color: '#DCE6EE' }
    }
  },
  plugins: {
    legend: { display: false },
  }
}
</script>

<template lang="pug">
.radar-chart-parent
  RadarChart(:chartData="chartData" :options="options")
</template>

<style lang="scss" scoped></style>