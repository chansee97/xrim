<script setup lang="ts">
import { NButton, NFlex } from 'naive-ui'
import type { TreeOption } from 'naive-ui'
import IconConnect from '@/components/icons/IconConnect.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import IconFolderOpen from '@/components/icons/IconFolderOpen.vue'
import { CONENT_MENU } from '@/constants/contentMenu'

const appStore = useAppStore()
const message = useMessage()

const pattern = ref('')
const treeSelectedKeys = ref()

const showDropdown = ref(false)
const x = ref(0)
const y = ref(0)
function handleSelect() {
  showDropdown.value = false
}
function handleClickoutside() {
  showDropdown.value = false
}

const editModal = ref(false)
const editModalData = ref({})
function handleOpenEditModal() {
  editModal.value = true
}

function nodeProps({ option }: { option: TreeOption }) {
  return {
    ondblclick() {
      if (option.children)
        return

      message.info(`[dblclick] ${option.label}`)
    },
    onContextmenu(e: MouseEvent): void {
      showDropdown.value = true
      x.value = e.clientX
      y.value = e.clientY
      e.preventDefault()
    },
  }
}
function updatePrefixWithExpaned(_keys: Array<string | number>, _option: Array<TreeOption | null>, meta: {
  node: TreeOption | null
  action: 'expand' | 'collapse' | 'filter'
}) {
  if (!meta.node)
    return
  switch (meta.action) {
    case 'expand':
      meta.node.prefix = () => h(IconFolderOpen)
      break
    case 'collapse':
      meta.node.prefix = () => h(IconFolder)
      break
  }
}
function renderSuffix({ option, _checked, selected }: any) {
  return h(
    NFlex,
    { size: 'small' },
    {
      default: () => {
        const btnList = {
          connect: h(NButton, {
            text: true,
          }, { icon: () => { return h(IconConnect) } }),
          settings: h(NButton, { text: true, onClick: handleOpenEditModal }, { icon: () => { return h(IconSettings) } }),
          delete: h(NButton, { text: true }, { icon: () => { return h(IconDelete) } }),
        }
        if (selected && option.children) {
          return [
            btnList.settings,
            btnList.delete,
          ]
        }
        if (selected) {
          return [
            btnList.connect,
            btnList.settings,
            btnList.delete,
          ]
        }

        return ''
      },
    }
    ,
  )
}
function handleSelectTree(keys: Array<string | number>, option: Array<TreeOption | null>) {
  treeSelectedKeys.value = keys
  editModalData.value = option[0] || {}
}
</script>

<template>
  <n-drawer
    v-model:show="appStore.connectionTreeShow" :width="350" placement="left" :trap-focus="false" :block-scroll="false"
    to="#drawer-target"
  >
    <n-drawer-content closable>
      <EditModal v-model="editModal" :connection-data="editModalData" />
      <template #header>
        <NFlex>
          <NButton text>
            <template #icon>
              <IconFolderAdd />
            </template>
          </NButton>
          <NButton text>
            <template #icon>
              <IconLinkAdd />
            </template>
          </NButton>
          <n-input v-model:value="pattern" class="flex-1" placeholder="Search...">
            <template #prefix>
              <n-icon>
                <IconSearch />
              </n-icon>
            </template>
          </n-input>
        </NFlex>
      </template>
      <n-tree
        v-model:selected-keys="treeSelectedKeys" :show-irrelevant-nodes="false" :data="appStore.connectionTreeData" :pattern="pattern" block-node
        :cancelable="false"
        expand-on-click block-line
        :render-suffix="renderSuffix" :node-props="nodeProps"
        :on-update:selected-keys="handleSelectTree"
        :on-update:expanded-keys="updatePrefixWithExpaned"
      />
      <n-dropdown
        :show="showDropdown" trigger="manual" placement="bottom-start" :options="CONENT_MENU" :x="x" :y="y"
        @select="handleSelect" @clickoutside="handleClickoutside"
      />
    </n-drawer-content>
  </n-drawer>
</template>
