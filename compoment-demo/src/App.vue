<template>
  <div id="app">
    <ul>
      <li>
        <!--   router-link不用实时刷新页面，和<a>链接相比     -->
        <router-link to="/">Home</router-link>
        <router-link to="/helloworld">HelloWorld</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {}
    },
    methods:
      {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
