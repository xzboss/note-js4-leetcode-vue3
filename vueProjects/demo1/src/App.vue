<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Demo1 from './components/Demo1.vue'
import Demo2 from './components/Demo2.vue'
import MyPlugin from './components/插件.vue'
// import Com from './components/autoEnroll/com.vue'
import { useMouse } from './hooks'
import { ref, onMounted, watch, reactive, useAttrs, defineAsyncComponent,getCurrentInstance,inject } from 'vue'
const Hello = defineAsyncComponent({
  loadingComponent: () => { import('./components/HelloWorld.vue') },
  delay: 2000
})

// console.log(getCurrentInstance())

const show = ref(false)
const { x, y } = useMouse()
</script>

<template>
  <div class="wrapper">
    <h1>111111</h1>
    <button @click="show=!show">消失显示</button>
    <HelloWorld v-if="show" />
    <h1>mouse location{{x}}--{{y}}</h1>
    <Demo1 />
    <Demo2 />
    <MyPlugin />
    <Com />
    {{$test()}}
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
