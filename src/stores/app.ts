import { defineStore } from 'pinia'

export const useAppStore = defineStore('store', {
  state: () => ({
    tabType: 'terminal',

    connectionTreeShow: false,
    connectionTreeData: [
      {
        label: 'Folder-1',
        key: 'Folder-1',
        children: [
          {
            label: 'File-1-1',
            key: 'File-1-1',
          },
          {
            label: 'Folder-1-2',
            key: 'Folder-1-2',
            children: [
              {
                label: 'File-1-2-1',
                key: 'File-1-2-1',
              },
              {
                label: 'File-1-2-2',
                key: 'File-1-2-2',
              },
            ],
          },
        ],
      },
      {
        label: 'Folder-2',
        key: 'Folder-2',
        children: [
          {
            label: 'File-2-1',
            key: 'File-2-1',
          },
          {
            label: 'File-2-2',
            key: 'File-2-2',
          },
        ],
      },
    ],
  }),
})
