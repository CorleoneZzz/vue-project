<template>
  <div class="show-blog" v-theme:column="'narrow'">
    <h2>博客总览</h2>
    <div class="single-blog" v-for="blog in blogs">
      <h3 v-color>{{blog.title}}</h3>
      <article>
        {{blog.body}}
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowBlog",
    data() {
      return {
        blogs: []
      }
    },
    created() {
      //如果是请求本地的json则要放到static文件夹里
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          this.blogs = data.body.slice(0, 10);
        })
    }
  }
</script>

<style lang="scss" scoped>
  .show-blog {
    max-width: 800px;
    margin: 20px auto;

    h2 {
      text-align: center;
    }

    .single-blog {
      background: aliceblue;
      padding: 10px;
      margin-top: 20px;
    }
  }
</style>
