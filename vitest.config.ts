// vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: 'nuxt',
    // you can optionally set nuxt-specific environment options
    // environmentOptions: {
    //   nuxt: {
    //     test: true,
    //     // This will allow accessing the Nuxt app in your tests
    //     // overriding the regular Nuxt build
    //   }
    // }
  },
})
