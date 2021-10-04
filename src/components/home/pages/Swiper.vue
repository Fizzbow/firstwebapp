<!-- The ref attr used to find the swiper instance -->
<!--<template>
  <div class="header-swiper">
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    &lt;!&ndash; slides &ndash;&gt;
    <swiper-slide v-for ="item in swiperList" :key="item.id"><img :src="item.imgUrl"></swiper-slide>
    &lt;!&ndash; Optional controls &ndash;&gt;
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'carrousel',
  data() {
    return {
      swiperList:[
        {
          id:'01',
          imgUrl:require('../img/1.jpg')
        },
        {
          id:'02',
          imgUrl:require('../img/2.jpg')
        },
        {
          id:'03',
          imgUrl:require('../img/3.jpg')
        }
      ]
      swiperOption:{
        pagination:{
          el:'.swiper-pagination'
        },
        loop:true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style type="text/css" scoped>
.header-swiper{
  background: #ccc;
  height: 0;
  padding-bottom: 26.67%;
  width: 100%;
}
.header-swiper img{
  width: 100%;
  height: 100%;
}
</style>-->
<template>
  <div class="header-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for='item in swiperList'
                    :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>

      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  props: ['swiperList'],
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
        speed: 400,
        loop: true,
      },
    }
  }
}


</script>
<style scoped lang="stylus">
// 这么写的目的是防止网速较慢的时候出现掉块的现象
.header-swiper
  background #ccc
  height 0
  padding-bottom 26.67%
// 设置的高度为100%会出现高度问题
.header-swiper img
  width 100%
  height 2rem
.header-swiper>>>.swiper-pagination-bullet-active
  background #fff
</style>
