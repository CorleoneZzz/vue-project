<template>
  <div class="user">
    <ul>
      <li v-for="user in users">
        <!--        <h2 v-on:click="user.show=!user.show">{{user.name}}</h2>-->
        <h2>{{user.name}}</h2>
        <!--        <h3 v-show="user.show">{{user.position}}</h3>-->
        <h3>{{user.email}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "User",
    props:
      {
        users:
          {
            type: Array,
            required: true
          }
      },
    data() {
      return {
        //抽离到父组件
        // users: [
        //   {name: "Henry", position: "web开发", show: false},
        //   {name: "Henry", position: "web开发", show: false},
        //   {name: "Henry", position: "web开发", show: false},
        //   {name: "Henry", position: "web开发", show: false},
        //   {name: "Henry", position: "web开发", show: false},
        //   {name: "Henry", position: "web开发", show: false},
        //   {name: "Henry", position: "web开发", show: false},
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        //   {name: "Henry", position: "web开发", show: false}
        // ]
      }
    }
  }
</script>

<style scoped>
  .user {
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: #2c3e50 1px solid;
    margin: 10px;
  }
</style>
