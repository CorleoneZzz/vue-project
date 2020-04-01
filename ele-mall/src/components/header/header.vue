<template>
  <div class="header">
    <div class="content-wrapper">
     <img class="avatar" width="64" height="64" :src="seller.avatar">
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">

    </div>
  </div>
</template>

<script>
export default {
  name: 'mallHeader',
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/mixin"
  .header
    background black
    color #ffffff
    .content-wrapper
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
      .content
        display inline-block
        font-size 14px
        margin-left 16px
        .title
         margin 2px 0 8px 0
         .brand
          display inline-block
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
          vertical-align top
         .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
</style>
