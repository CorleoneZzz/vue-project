<template>
  <div id="home">
    <Header v-bind:title="title" v-on:titleChanged="updateTitle($event)"></Header>
    <img src="../assets/logo.png">
    <!--父组件数值，待子组件获取-->
    <User v-bind:users="users"></User>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header'
  import Footer from './Footer'
  import User from "./User";

  export default {
    name: 'Home',
    components: {
      User, Header, Footer
    },
    data() {
      return {
        users: [
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false},
          // {name: "Henry", position: "web开发", show: false}
        ],
        title: "传递的是一个值，number string boolean"
      }
    },
    methods:
      {
        updateTitle(title) {
          this.title = title;
        }
      },
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data) => {
            console.log(data)
            this.users = data.body;
          }
        )
    }
  }
</script>

<style>
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
