// app/plugins/api.ts
export default defineNuxtPlugin({
  setup() {
    const config = useRuntimeConfig()
    const api = $fetch.create({
      baseURL: config.public.apiBase,
      onRequest({ options }) {
        // 在这里处理请求头，例如添加 token
        const token = useCookie('token')
        if (token.value) {
          options.headers = options.headers || {}
          // @ts-expect-error - header type mismatch
          options.headers.Authorization = `Bearer ${token.value}`
        }
      },
      onResponseError({ response }) {
        // 全局错误处理
        if (response.status === 401) {
          // 处理未授权，例如跳转登录
          // navigateTo('/login')
          console.warn('Unauthorized access')
        }
      },
    })

    return {
      provide: {
        api,
      },
    }
  },
})
