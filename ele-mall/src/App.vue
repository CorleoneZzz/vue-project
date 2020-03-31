<template>
  <div id="app">
    <mallHeader></mallHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/foo">Go to Foo</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/foo">Go to Foo</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/foo">Go to Foo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mallHeader from './components/header/header'
export default {
  name: 'App',
  components: {mallHeader}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex

</style>
