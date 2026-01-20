// 示例：扩展 Nuxt 运行时配置类型
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    // 类型化 runtimeConfig (server-side)
    apiSecret: string
  }
  interface PublicRuntimeConfig {
    // 类型化 runtimeConfig.public (client-side)
    apiBase: string
  }
}

export {}
