<script>
import { ref, onMounted, watch, reactive,getCurrentInstance } from 'vue'
export default {
  setup(_,ctx){
    const n = ref(1)
    const isVerify = ref(false)
    function test(){
      console.log('test')
    }
    // console.log(getCurrentInstance())
    console.log(ctx)
    
    
    return {
      n,
      isVerify,
      test
    }
  },
  directives: {
    focus:{
      mounted:(e, binding)=>{
        e.focus()
        // console.log(binding)
      }
    },
    verify:{
      mounted(e, binding){
        // console.log(binding.dir.mounted)
        e.addEventListener('input',()=>{
          // console.log(e.value,binding.value,'@@@输入1234才行')
          if(e.value === binding.value){
            binding.instance.isVerify = true
          }else{
            binding.instance.isVerify = false
          }

        })
      },
      created(e, binding){
        // console.log(binding.dir)
      }
    }
  }
}

</script>

<template>
  <div class="greetings">
    hello---{{n}}
    <input v-verify="'1234'" v-model="n" v-focus:a.bar="2">
    <input type="checkbox" name="s" :checked="isVerify">
    {{isVerify}}
  </div>
</template>

<style lang="scss" scoped>
input[type='checkbox'] {
  width: 50px;
  height: 50px;
  pointer-events: none;
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
  padding: 20px;
  border: 3px solid rgb(236, 87, 87);
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
.greetings{
    height: 100px;
    margin: 20px;
    padding: 10px;
    border: 1px solid green;
    color: red;
    position: relative;
    &::before {
        content: '自定义指令';
        background-color: #fff;
        position: absolute;
        top: -15px;
        left: 10px;
        padding: 0 20px;
    }
}
</style>
