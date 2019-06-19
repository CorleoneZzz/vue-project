<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>博客预览</router-link>
        </li>
        <li>
          <router-link to="/addblog" exact>添加博客</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogHeader"
    }
</script>

<style lang="scss" scoped>
nav
{
  max-width: 560px;
  margin: 0 auto;
  background: crimson;
  padding: 30px;
  ul
  {
    list-style: none;
    text-align: center;
    li
    {
      display: inline-block;
      a
      {
        text-decoration: none;
        color: white;
      }
      .router-link-active
      {
        background: rgba(255,255,255,0.8);
        color: #444444;
      }
    }
  }
}

</style>
