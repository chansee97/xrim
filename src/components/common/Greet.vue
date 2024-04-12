<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'

const greetMsg = ref('')
const name = ref('')

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke('greet', { name: name.value })
  console.warn('🚀 ~ greet ~ name.value:', name.value)
  console.warn('🚀 ~ greet ~ greetMsg.value:', greetMsg.value)
}
</script>

<template>
  <input v-model="name" type="text" placeholder="Enter a name...">
  <n-button type="primary" @click="greet">
    Primary
  </n-button>

  <p>{{ greetMsg }}</p>
</template>
