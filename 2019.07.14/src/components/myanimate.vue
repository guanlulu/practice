<template>
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Welcome to Your Vue.js App</p>
    </transition>
  </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  name: "myanimate",
  data() {
    return {
        show: true
    };
  }
};
</script>