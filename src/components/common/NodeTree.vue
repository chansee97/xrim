<script setup lang="ts">
import type { TreeOption } from 'naive-ui'

const data = ref([
  {
    label: 'Root',
    key: '1',
    children: [
      {
        label: 'Child 1',
        key: '1-1',
        children: [
          {
            label: 'Grandchild 1',
            key: '1-1-1',
            children: [
              {
                label: 'Great Grandchild 1',
                key: '1-1-1-1',
                children: [],
              },
            ],
          },
          {
            label: 'Grandchild 2',
            key: '1-1-2',
            children: [],
          },
        ],
      },
      {
        label: 'Child 2',
        key: '1-2',
        children: [
          {
            label: 'Grandchild 3',
            key: '1-2-1',
            children: [],
          },
        ],
      },
    ],
  },

])
const message = useMessage()
const optionsRef = ref<TreeOption[]>([])
function nodeProps({ option }: { option: TreeOption }) {
  return {
    ondblclick() {
      message.info(`[dblclick] ${option.label}`)
    },
    onContextmenu(e: MouseEvent): void {
      optionsRef.value = [option]
      // showDropdownRef.value = true
      // xRef.value = e.clientX
      // yRef.value = e.clientY
      // console.log(e.clientX, e.clientY)
      e.preventDefault()
    },
  }
}
</script>

<template>
  <n-tree
    block-line
    :data="data"
    expand-on-click
    :node-props="nodeProps"
  />
</template>

<style scoped>

</style>
