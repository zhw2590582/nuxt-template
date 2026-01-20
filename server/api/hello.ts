export default defineEventHandler((_event) => {
  return {
    message: 'Hello form Server API!',
    date: new Date().toISOString(),
  }
})
