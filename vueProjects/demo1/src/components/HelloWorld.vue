<script setup>
import { ref, onMounted, watch, reactive } from 'vue'

</script>

<template>
  <div class="greetings">
    222
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
  border: 1px solid red;
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
