<template>
  <div class="container mx-auto p-4 py-20 text-center">
    <h1 class="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-200">
      About Page
    </h1>
    <p class="text-gray-600 dark:text-gray-400">
      This is a Nuxt 4 template application.
    </p>
    <div class="mt-8">
      <NuxtLink to="/" class="text-green-600 hover:underline">
        Back Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'logger',
})
</script>
