<template>
  <div class="TranslateForm">
    <form v-on:submit="formSubmit">
      <input type="text" placeholder="输入需要翻译的内容" v-model="TranslateData">
      <select>
        <option>English</option>
      </select>
      <button type="submit">翻译</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "TranslateForm",
    data() {
      return {
        TranslateData: ''
      }
    },
    methods:
      {
        formSubmit(e) {
          // alert(this.TranslateData);
          //子组件注册事件
          this.$emit("formSubmit", this.TranslateData);
          //取消默认刷新
          e.preventDefault();
        }
      }
  }
</script>

<style scoped>

</style>
