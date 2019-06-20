<template>
  <div class="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
  export default {
    name: "SingleBlog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
        .then(
          (data) => {
            // console.log(data)
            this.blog = data.body;
          })
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }

  .single-blog {
    max-width: 560px;
    margin: 20px auto;
    background: aliceblue;
    padding: 10px;
  }
</style>
