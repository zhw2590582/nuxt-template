// vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: 'nuxt',
    // 解决 "Waiting for file changes..." 卡住 CI 的问题
    watch: false,
    environmentOptions: {
      nuxt: {
        overrides: {
          // 解决 [warn] [@nuxtjs/og-image] Nuxt OG Image is enabled but SSR is disabled.
          ssr: true,
        },
        // 注册测试专用的插件
        plugins: [
          './tests/plugins/color-mode.mock.ts',
        ],
      },
    },
  },
})
