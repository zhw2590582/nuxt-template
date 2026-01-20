import process from 'node:process'

export default defineNuxtPlugin(() => {
  // Mock color mode for tests to avoid "preference undefined" error
  if (process.env.TEST) {
    return {
      provide: {
        colorMode: {
          preference: 'light',
          value: 'light',
          unknown: false,
          forced: false,
        },
      },
    }
  }
})
