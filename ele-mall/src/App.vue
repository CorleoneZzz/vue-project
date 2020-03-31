<template>
  <div id="app">
    <mallHeader></mallHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">Go to Foo</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/foo">Go to Foo</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/foo">Go to Foo</router-link>
      </div>
    </div>
    <router-view></router-view>
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
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab-item
      flex 1
      text-align center
</style>
