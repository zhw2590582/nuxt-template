export const useAppStore = defineStore('app', {
  state: () => ({
    colorMode: useCookie('color-mode').value || useColorMode().value || 'dark',
  }),
  actions: {
    setColorMode(mode: 'light' | 'dark' | 'system') {
      const colorMode = useColorMode()
      const colorModeCookie = useCookie('color-mode')
      colorModeCookie.value = mode
      colorMode.preference = mode
      this.colorMode = mode
    },
  },
})
