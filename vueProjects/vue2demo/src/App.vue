<script>
export default {
  name: 'app',
  data() {
    return {
      obj: {
        x: 1
      }
    };
  },
  methods: {
    handle() {
      this.obj.x++;
      if (this.obj.y) {
        this.obj.y++;
        console.log(Object.getOwnPropertyDescriptors(this.obj), '@@@');
      } else {
        this.obj.y = 1;
      }
    }
  }
};
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <h1>{{ obj.x }}-----{{ obj.y }}</h1>
        <button @click="handle">click-me</button>
      </div>
    </header>

    <main></main>
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
