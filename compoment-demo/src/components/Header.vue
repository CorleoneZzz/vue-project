<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
    export default {
      name: "Header",
      data() {
        return{
          title:"vue component demo"
        }
      }
    }
</script>

<style scoped>
   header
   {
     padding: 10px;
     background: #42b983;
   }
   h1
   {
     color: aliceblue;
   }
</style>
