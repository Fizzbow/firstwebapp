<template>
  <div class="city">
    <city-header></city-header>
    <city-list :cities = 'cities' :hotCities="hotCities"></city-list>
  </div>
</template>
<script>
import CityHeader from './pages/Header'
import CityList from './pages/List'

export default {
  components:{
    CityHeader,
    CityList
  },
  data(){
    return{
      hotCities:[],
      cities:{}
    }
  },
  mounted() {
    this.$http.get('./api/city.json').then((res)=>{
      //console.log(res.data.data)
      let data = res.data.data;
      this.hotCities = data.hotCities;
      this.cities = data.cities;
    })
  }
}
</script>
<style scoped>
.city{
  background:#f5f5f5 ;
}
</style>
