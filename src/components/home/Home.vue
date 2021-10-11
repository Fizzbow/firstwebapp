<!--父组件向后台请求数据(只需请求一次)，把父组件的数据传递给子组件-->
<!--父组件把值传递给子组件可以用pros去传-->
<template>
  <div class="home">
      <home-header></home-header>
      <home-swiper :swiperList = 'swiperList'></home-swiper>
      <home-icons :iconList = 'iconList'></home-icons>
      <home-location></home-location>
      <home-activity></home-activity>
      <home-hot :hotList = 'hotList'></home-hot>
      <home-like :likeList = 'likeList'></home-like>
      <home-vacation :vacationList = 'vacationList'></home-vacation>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVacation
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      likeList: [],
      vacationList: [],
      hotList: [],
      changeCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHttp () {
      this.$http.get('/api/dataHome.json')
        .then((res) => {
          const data = res.data.data
          // console.log(data[0])
          console.log(data)
          data.forEach((item, index) => {
            console.dir(this)
            if (item.city == this.city) {
              console.log(item)
              this.swiperList = item.swiperList
              this.iconList = item.iconList
              this.likeList = item.likeList
              this.vacationList = item.vacationList
              this.hotList = item.hotList
            }
          })
        })
    }
  },
  mounted () {
    this.changeCity = this.city
    this.getHttp()
  },
  activated () {
    if (this.changeCity !== this.city) {
      this.getHttp()
      this.changeCity = this.city
    }
  }
}
</script>

<style scoped>
.home{
  background:#f5f5f5 ;
}
</style>
