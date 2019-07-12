<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '../components/NavHeader'
  import NavFooter from '../components/NavFooter'
  import NavBread from './../components/NavBread'

  export default {
    name: "GoodList",
    components: {
      NavHeader,
      NavFooter,
      NavBread
    },

  }
</script>

<style scoped>

</style>
