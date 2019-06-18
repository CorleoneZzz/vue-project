<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form>
      <label>博客标题</label>
      <input v-model="title" type="text"/>
      <label >博客内容</label>
      <textarea v-model="content"></textarea>
      <div id="checkbox">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="categories">
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="categories">
      </div>
     <label>作者</label>
      <select v-model="author">
        <option v-for="author in authors"  :key=author>{{author}}</option>
      </select>
     <!--prevent阻止刷新页面 -->
      <button v-on:click.prevent="post"></button>
    </form>

    <hr>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{title}}</p>
      <p>博客内容：</p>
      <p>
        {{content}}
      </p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in categories" :key="category">
          {{category}}
        </li>
      </ul>
      <p>博客作者：</p>
      <p>{{author}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddBlog",
    data()
    {
      return{
          title:'',
          content:'',
          categories: [],
          author:'',
          authors:["Amani","Berry","Cherry"]
        }
    }
  }
</script>

<style scoped>

</style>
