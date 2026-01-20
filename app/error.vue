<template>
  <div class="flex h-screen flex-col items-center justify-center bg-gray-100 text-center dark:bg-gray-900">
    <h1 class="text-9xl font-bold text-green-600 dark:text-green-400">
      {{ error.statusCode }}
    </h1>
    <p class="mt-4 text-2xl text-gray-700 dark:text-gray-300">
      {{ error.message }}
    </p>
    <button
      class="mt-8 rounded bg-green-500 px-6 py-3 font-bold text-white transition-colors hover:bg-green-600"
      @click="handleError"
    >
      Go Back Home
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>
