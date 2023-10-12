<template>
  <div class="plugin-container">
    {{$translate('abcdefghijklmn')}}
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.plugin-container{
    height: 100px;
    margin: 20px;
    padding: 10px;
    border: 1px solid green;
    color: red;
    position: relative;
    &::before {
        content: 'plugin';
        background-color: #fff;
        position: absolute;
        top: -15px;
        left: 10px;
        padding: 0 20px;
    }
}
</style>