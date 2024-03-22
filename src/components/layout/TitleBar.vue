<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'

// 最小化
async function handleWinMin() {
  await appWindow.minimize()
}
// 最大化/还原
async function handleWinMax2Min() {
  const resizable = await appWindow.isResizable()
  if (!resizable)
    return
  await appWindow.toggleMaximize()
}
// 关闭
async function handleWinClose() {
  await appWindow.close()
}
</script>

<template>
  <div
    class="flex justify-between items-center h-2.5em p-l-1em bg-#d9d9d9"
    data-tauri-drag-region @dblclick="handleWinMax2Min"
  >
    <h1>X-rim</h1>
    <n-button-group class="absolute right-0 top-0" size="small">
      <n-button secondary @click="handleWinMin">
        <template #icon>
          <icon-minimize />
        </template>
      </n-button>
      <n-button secondary @click="handleWinMax2Min">
        <template #icon>
          <icon-maximize />
        </template>
      </n-button>
      <n-button secondary type="error" @click="handleWinClose">
        <template #icon>
          <icon-close />
        </template>
      </n-button>
    </n-button-group>
  </div>
</template>

<style scoped>

</style>
