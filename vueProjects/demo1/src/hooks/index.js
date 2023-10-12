import { onMounted, ref } from 'vue'
export function useMouse() {
  const x = ref(0)

  const y = ref(0)
  onMounted(() => {
    window.addEventListener('mousemove', (e) => {
      x.value = e.pageX
      y.value = e.pageY
    })
  })
  return { x, y }
}
