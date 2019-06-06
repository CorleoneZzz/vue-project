<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
  export default {
    name: "Header",
    props:
      {
        title:
          {
            type: String
          }
      },
    data() {
      return {
        // title: "vue component demo"
      }
    },
    methods:
      {
        changeTitle: function () {
          // this.title = "changed";
          this.$emit("titleChanged", "子向父组件传值");
        }
      }
  }
</script>

<style scoped>
  header {
    padding: 10px;
    background: #42b983;
  }

  h1 {
    color: aliceblue;
  }
</style>
