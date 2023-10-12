<script setup>
import { ref, onMounted, watch, reactive } from 'vue'
const vFocus = {
  mounted:(e)=>{
    e.focus()
  }
}
</script>

<template>
  <div class="greetings">
    hello---
    <input type="text" v-focus>
    {{$test()}}
  </div>
</template>

<style scoped>
input[type='radio'] {
  display: none;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.greetings {
  border: 10px solid rgb(236, 87, 87);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
