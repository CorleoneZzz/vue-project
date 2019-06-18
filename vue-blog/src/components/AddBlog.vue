<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form v-if="!summited">
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
    </form>
    <!--prevent阻止刷新页面 -->
    <button v-on:click.prevent="post">添加博客</button>

    <hr>

    <div v-if="summited">
      <h3>您的博客已经添加成功</h3>
    </div>
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
        authors: ["Amani", "Berry", "Cherry"],
        summited: false
        }
    },
    methods:
      {
        post() {
          this.$http.post("http://jsonplaceholder.typicode.com/posts"
            , {
              title: this.title,
              body: this.content,
              userId: 1
            }).then((data) => {
            console.log(data);
            this.summited = true;
          })
        }
      }
  }
</script>

<style lang="scss" scoped>
  .add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;

    textarea, input, select {
      width: 100%;
    }

    label {
      display: block;
    }

    #checkbox {
      label, input {
        display: inline-block;
      }

      input {
        width: 10%;
      }
    }

    button {
      color: #ffffff;
      border-radius: 4px;
      background: crimson;
      padding: 10px;
      margin-top: 10px;
    }

    #preview {
      border: 1px solid gainsboro;
      padding: 20px;
      margin-top: 30px;
    }
  }
</style>
