<script setup lang="ts">
const router = useRouter()
const appstroe = useAppStore()
function handleTab(name: string) {
  router.push(`/${name}`)
}
</script>

<template>
  <div class="p-2">
    <n-tabs
      v-model:value="appstroe.tabType"
      placement="right"
      style="--n-tab-font-size:24px" @update:value="handleTab"
    >
      <n-tab name="minitor">
        <IconMonitor />
      </n-tab>
      <n-tab name="terminal">
        <IconTerminal />
      </n-tab>
      <n-tab name="log">
        <IconLog />
      </n-tab>
      <n-tab name="settings">
        <IconSettings />
      </n-tab>
      <n-tab name="about">
        <IconInformation />
      </n-tab>
    </n-tabs>
  </div>
</template>

<style scoped>

</style>
