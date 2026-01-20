<script setup lang="ts">
const counter = useCounterStore()
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
    <h1 class="mb-4 text-4xl font-bold text-green-600 dark:text-green-400">
      Nuxt + Tailwind CSS
    </h1>
    <div class="mb-4 flex flex-col items-center gap-2">
      <p class="text-gray-700 dark:text-gray-300">
        Count: {{ counter.count }}
      </p>
      <p class="text-gray-700 dark:text-gray-300">
        Double: {{ counter.doubleCount }}
      </p>
      <button
        class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        @click="counter.increment"
      >
        Increment
      </button>
    </div>
    <NuxtWelcome />
  </div>
</template>
