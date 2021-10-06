<template>
  <div class="city">
    <city-header></city-header>
    <city-hot></city-hot>
    <city-sort></city-sort>
  </div>
</template>
<script>
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
import CitySort from './pages/Sort'
export default {
  components:{
    CityHeader,
    CityHot,
    CitySort
  }
}
</script>
<style scoped>
.city{
  background:#f5f5f5 ;
}
</style>
