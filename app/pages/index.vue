<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-12 text-center">
      <h1 class="mb-4 text-4xl font-bold text-green-600 dark:text-green-400">
        Nuxt 4 Template
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        {{ $t('welcome') }}
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- 1. Theme Module -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          {{ $t('theme') }} (@nuxtjs/color-mode)
        </h2>
        <div class="flex gap-2">
          <button
            v-for="mode in ['system', 'light', 'dark']"
            :key="mode"
            class="rounded px-3 py-1 text-sm font-medium capitalize"
            :class="colorMode.preference === mode ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'"
            @click="colorMode.preference = mode"
          >
            {{ $t(mode) }}
          </button>
        </div>
        <p class="mt-4 text-sm text-gray-500">
          Current: {{ colorMode.value }}
        </p>
      </div>

      <!-- 2. i18n Module -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          {{ $t('language') }} (@nuxtjs/i18n)
        </h2>
        <div class="flex gap-2">
          <button
            class="rounded px-3 py-1 text-sm font-medium"
            :class="locale === 'en' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'"
            @click="setLocale('en')"
          >
            English
          </button>
          <button
            class="rounded px-3 py-1 text-sm font-medium"
            :class="locale === 'zh-CN' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'"
            @click="setLocale('zh-CN')"
          >
            中文
          </button>
        </div>
      </div>

      <!-- 3. Pinia Store -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          Pinia Store (@pinia/nuxt)
        </h2>
        <div class="space-y-2">
          <p class="text-gray-600 dark:text-gray-300">
            Count: <span class="font-mono font-bold">{{ counter.count }}</span>
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            Double: <span class="font-mono font-bold">{{ counter.doubleCount }}</span>
          </p>
          <button
            class="mt-2 w-full rounded bg-green-500 px-4 py-2 text-sm font-bold text-white hover:bg-green-600"
            @click="counter.increment"
          >
            Increment
          </button>
        </div>
      </div>

      <!-- 4. Device Module -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          {{ $t('device_info') }} (@nuxtjs/device)
        </h2>
        <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
          <li>Type: {{ isMobile ? $t('mobile') : $t('desktop') }}</li>
          <li class="break-all">
            User Agent: {{ userAgent.substring(0, 30) }}...
          </li>
        </ul>
      </div>

      <!-- 5. VueUse -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          VueUse (@vueuse/nuxt)
        </h2>
        <div class="text-gray-600 dark:text-gray-300">
          <p>{{ $t('mouse_position') }}:</p>
          <p class="font-mono">
            x: {{ x }}, y: {{ y }}
          </p>
        </div>
      </div>

      <!-- 6. Server API -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          Server API
        </h2>
        <button
          class="mb-2 rounded bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600"
          :disabled="loading"
          @click="fetchApi"
        >
          {{ loading ? $t('loading') : $t('fetch_api') }}
        </button>
        <p v-if="apiResponse" class="mt-2 rounded bg-gray-100 p-2 text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">
          {{ apiResponse }}
        </p>
      </div>

      <!-- 7. Shared Utils -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
          State & Utils
        </h2>
        <p class="mb-4 text-sm text-gray-500">
          Time: {{ time }}
        </p>
        <p class="text-sm text-gray-500">
          Shared: {{ sharedUtility('User') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sharedUtility } from '#shared/utils'

const { locale, setLocale } = useI18n()
const colorMode = useColorMode()
const counter = useCounterStore()
const { x, y } = useMouse()
const { isMobile, userAgent } = useDevice()
const time = useTime()

const apiResponse = ref('')
const loading = ref(false)

async function fetchApi() {
  loading.value = true
  try {
    const data: any = await $fetch('/api/hello')
    apiResponse.value = data.message
  }
  catch {
    apiResponse.value = 'Error fetching API'
  }
  finally {
    loading.value = false
  }
}

// OG Image Configuration
defineOgImageComponent('NuxtSeo', {
  title: 'Nuxt 4 Template',
  description: 'A starter template for Nuxt 4 with Tailwind, Pinia, and i18n.',
  theme: '#00dc82',
  colorMode: 'dark',
})
</script>
