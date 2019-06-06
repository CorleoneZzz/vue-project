<template>
  <footer>
    <h1>{{copyright}}</h1>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return{
        copyright:"copyright 2017 vue demo"
      }
    }
  }
</script>

<style scoped>
  footer
  {
    padding: 10px;
    background: #2c3e50;
  }
  h1
  {
    color: aliceblue;
  }
</style>
