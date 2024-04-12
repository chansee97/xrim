<script setup lang="ts">
const appStore = useAppStore()
onDeactivated(() => {
  appStore.connectionTreeShow = false
})
</script>

<template>
  <div class="flex h-full relative overflow-hidden">
    <ConnectionTree />
    <div id="drawer-target" class="flex-1">
      <Greet />

      <NButton @click="appStore.connectionTreeShow = true">
        open!
      </NButton>
    </div>
  </div>
</template>

<style scoped></style>
