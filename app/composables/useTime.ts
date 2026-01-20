export function useTime() {
  return useState('time', () => new Date().toLocaleTimeString())
}
