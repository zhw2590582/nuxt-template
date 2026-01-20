<template>
  <div class="flex flex-col items-center justify-center py-20">
    <h1 class="mb-4 text-4xl font-bold text-green-600 dark:text-green-400">
      {{ $t('welcome') }}
    </h1>

    <div class="mb-8 w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900">
      <p class="mb-4 text-sm text-gray-500">
        Stored at: {{ time }}
      </p>

      <div class="mb-6 space-y-2">
        <p class="text-lg text-gray-700 dark:text-gray-300">
          Count: <span class="font-mono font-bold">{{ counter.count }}</span>
        </p>
        <p class="text-lg text-gray-700 dark:text-gray-300">
          Double: <span class="font-mono font-bold">{{ counter.doubleCount }}</span>
        </p>
      </div>

      <button
        class="w-full rounded bg-green-500 px-4 py-2 font-bold text-white transition-colors hover:bg-green-600"
        @click="counter.increment"
      >
        Increment
      </button>
    </div>

    <!-- NuxtWelcome is a built-in component suitable for index -->
    <div class="mt-8">
      <NuxtWelcome />
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = useCounterStore()
const time = useTime()
</script>
