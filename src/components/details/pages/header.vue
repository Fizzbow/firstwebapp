<template>
  <div>
    <div class="header-return" v-show="showHeader">
      <span class="border-return"></span>
      <span class="iconfont return" @click="toHome">&#xe743;</span>
    </div>
    <div class="header-top"
    v-show = "!showHeader"
         :style="styleOpacity"
    >
      <div class="header-left">
      <span class="iconfont" @click="toHome">
        &#xe743;
      </span>
      </div>
      北京国际鲜花港
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showHeader: true,
      styleOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    }
  },
  mounted () {
    let That = this
    window.addEventListener('scroll', function () {
      let top = document.documentElement.scrollTop
      if (top > 45) {
        let opacity = top / 130
        opacity = opacity > 1 ? 1 : opacity
        That.styleOpacity = {opacity}
        That.showHeader = false
      } else {
        That.showHeader = true
      }
    })
  }
}
</script>
<style scoped lang="stylus">
@import "~css/var.styl"
.header-return{
  position: absolute;
  left: .1rem;
  top: .1rem;
  width: .72rem;
  height: .72rem;
}
.border-return{
  display: block;
  background: #000;
  width: .72rem;
  height: .72rem;
  opacity: .5;
  border-radius: .36rem;
}
.return{
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  width: .72rem;
  line-height: .72rem;
  text-align: left;
  text-indent: .20rem;
  font-weight: bold;
}
  .header-top{
    z-index 99;
    position fixed;
    top 0;
    text-align center;
    width 100%;
    line-height .88rem;
    background $bgColor;
    color $textColor;
    font-size .36rem;
  }
    .header-left{
      position absolute;
      width .4rem;
      padding 0 .2rem;
      text-align center;
      font-weight bold;
    }
</style>
