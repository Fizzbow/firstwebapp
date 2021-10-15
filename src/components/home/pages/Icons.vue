<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for ="(item,key) in page" :key="key">
        <div class="icons-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl">
          <p>{{page.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['iconsList'],
  data () {
    return {
      swiperOptions: {}
    }
  },
  computed: {
    page () {
      let pages = []
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8)
        if (!pages[idx]) pages[idx] = []
        pages[idx].push(item)
      })

      return pages
    }
  }
}
</script>
<style scoped lang="stylus">
@import "~css/var.styl"
.icons{
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.icons-item{
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
}
.icons-item img{
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: .1rem;
}
.icons-item p{
  textOverflow();
  margin-top: .1rem;
  font-size:.28rem;
  text-align: center;
  color: #212121;
}
</style>
