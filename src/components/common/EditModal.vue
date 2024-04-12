<script setup lang="ts">
const props = defineProps<Props>()

const model = defineModel({ default: false })

interface Props {
  connectionData?: any
}

function closeModal() {
  model.value = false
}
function submitModal() {
  model.value = false
}
</script>

<template>
  <n-modal v-model:show="model">
    <n-card
      style="width: 600px"
      title="编辑连接"
      :bordered="false"
    >
      内容
      <pre>
        {{ props.connectionData }}
      </pre>
      <template #footer>
        <n-flex justify="end">
          <n-button @click="closeModal">
            取消
          </n-button>
          <n-button type="primary" @click="submitModal">
            确定
          </n-button>
        </n-flex>
      </template>
    </n-card>
  </n-modal>
</template>
