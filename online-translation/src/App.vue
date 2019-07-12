<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h3>简单/易用/便捷</h3>
    <!--接受子组件传来的事件-->
    <translate-form v-on:formSubmit="TranslateData"></translate-form>
    <translate-output v-text="translateData"></translate-output>
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
    data() {
      return {
        translateData: ''
      }
    },
    methods:
      {
        TranslateData(data, language) {
          this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190712T092548Z.c9dea7bfdf4c67be.be65d7d2111f532cd97266858abdcdbd8577d409&lang=" + language + "&text=" + data)
            .then(r => {
              this.translateData = r.body.text[0];
            })
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
