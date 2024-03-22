<script setup lang="ts">
import type { TreeOption } from 'naive-ui'

const active = ref(false)
onDeactivated(() => {
  active.value = false
})
const message = useMessage()
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
              },
            ],
          },
          {
            label: 'Grandchild 2',
            key: '1-1-2',
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
          },
        ],
      },
    ],
  },

])

const optionsRef = ref<TreeOption[]>([])
const pattern = ref('')
function nodeProps({ option }: { option: TreeOption }) {
  return {
    ondblclick() {
      if (option.children)
        return

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
  <div class="flex h-full relative overflow-hidden">
    <n-drawer
      v-model:show="active"
      :width="350"
      placement="left"
      :trap-focus="false"
      :block-scroll="false"
      to="#drawer-target"
    >
      <n-drawer-content closable>
        <template #header>
          <n-flex>
            <n-button quaternary type="primary">
              <template #icon>
                <IconDocumentAdd />
              </template>
            </n-button>
            <n-button quaternary type="primary">
              <template #icon>
                <IconFolderAdd />
              </template>
            </n-button>
            <n-input v-model:value="pattern" class="flex-1" placeholder="Search...">
              <template #prefix>
                <n-icon>
                  <IconSearch />
                </n-icon>
              </template>
            </n-input>
          </n-flex>
        </template>
        <n-tree
          :show-irrelevant-nodes="false" :data="data" :pattern="pattern" expand-on-click
          :node-props="nodeProps"
        />
      </n-drawer-content>
    </n-drawer>
    <div id="drawer-target" class="flex-1">
      <Greet />

      <n-button @click="active = !active">
        open!
      </n-button>
    </div>
  </div>
</template>

<style scoped></style>
