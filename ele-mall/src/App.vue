<template>
  <div id="app">
    <mallHeader :seller="seller"></mallHeader>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import mallHeader from './components/header/header'
export default {
  name: 'App',
  components: {mallHeader},
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('/api/seller').then((response) => {
        let data = response.data
        if (data.errno === 0) {
          this.seller = data.data
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      & > a
       display block
       font-size 14px
       color rgb(77, 85, 93)
       &.active
        color: rgb(240, 20, 20)
</style>
