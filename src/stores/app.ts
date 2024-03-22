import { defineStore } from 'pinia'

export const useAppStore = defineStore('store', {
  state: () => ({
    tabType: 'terminal',
  }),
})
