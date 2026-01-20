<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const appStore = useAppStore()
appStore.setColorMode(appStore.colorMode as 'light' | 'dark')
</script>
