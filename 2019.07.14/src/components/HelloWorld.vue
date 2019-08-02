<template>
  <div class="hello">
    <myanimate></myanimate>
    <myanimate2></myanimate2>
  </div>
</template>

<script>
import myanimate from './myanimate'
import myanimate2 from './myanimate2'
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        }
    },
    components: {
        myanimate,
        myanimate2
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
