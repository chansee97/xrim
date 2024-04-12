<script setup lang="ts">
import Chart from 'chart.js/auto'

const chartRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  createOne()
})

function createOne() {
  return new Chart(chartRef.value!, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}
</script>

<template>
  <n-grid x-gap="12" y-gap="12" :cols="2">
    <n-gi>
      <n-card>
        <div class="relative w-40vw h-40vh">
          <canvas ref="chartRef" />
        </div>
      </n-card>
    </n-gi>
    <n-card>
      卡片内容
    </n-card>
    <n-gi>
      <n-card>
        卡片内容
      </n-card>
    </n-gi>
    <n-gi>
      <n-card>
        卡片内容
      </n-card>
    </n-gi>
  </n-grid>
</template>

<style scoped></style>
