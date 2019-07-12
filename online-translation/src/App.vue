<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h3>简单/易用/便捷</h3>
    <!--接受子组件传来的事件-->
    <translate-form v-on:formSubmit="TranslateData"></translate-form>
    <translate-output></translate-output>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import TranslateForm from "./components/TranslateForm";
  import TranslateOutput from "./components/TranslateOutput";

  export default {
    name: 'App',
    components: {
      TranslateOutput,
      TranslateForm,
      HelloWorld
    },
    methods:
      {
        TranslateData(data) {
           alert(data)
        }
      }
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
