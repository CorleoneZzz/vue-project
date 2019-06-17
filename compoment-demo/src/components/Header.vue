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
      },
    // beforeCreate() {
    //   alert("组件实例化之前执行的函数");
    // },
    // created() {
    //   alert("组件实例化完成，但页面还未显示");
    // },
    // beforeMount() {
    //   alert("组件挂载前，页面仍未展示，但虚拟dom已经配置");
    // },
    // mounted() {
    //   alert("组件挂载后，此方法执行后，页面显示");
    // },
    // //页面发生变化才触发调用
    // beforeUpdate() {
    //   alert("组件更新前，页面仍未更新，但虚拟dom已经配置");
    // },
    // updated() {
    //   alert("组件更新，此方法执行后，页面显示");
    // },
    // beforeDestroy() {
    //   alert("组件销毁前");
    // },
    // destroyed() {
    //   alert("组件销毁");
    // }
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
