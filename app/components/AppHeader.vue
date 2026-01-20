<template>
  <header class="bg-white p-4 shadow dark:bg-gray-800">
    <nav class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold text-green-600">
        Nuxt App
      </NuxtLink>
      <div class="space-x-4">
        <NuxtLink to="/" class="text-gray-700 hover:text-green-500 dark:text-gray-300">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="text-gray-700 hover:text-green-500 dark:text-gray-300">
          About
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
