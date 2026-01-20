import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-og-image',
    'nuxt-security',
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ['\'self\'', 'data:', 'https:'],
        // allow inline scripts for development
        'script-src': ['\'self\'', '\'unsafe-inline\'', 'https:'],
      },
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
  site: {
    url: 'https://example.com',
    name: 'Nuxt Template',
    description: 'A Nuxt 4 Template',
    defaultLocale: 'en',
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls', // Optional: dynamic URLs from API
    ],
  },
  robots: {
    // any custom robots.txt rules
  },
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'aimu-locale',
    },
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-CN', name: '中文简体', file: 'zh-CN.json' },
    ],
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Template',
      short_name: 'NuxtTemplate',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
