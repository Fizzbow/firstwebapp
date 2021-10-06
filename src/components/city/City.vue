<template>
  <div class="city">
    <city-header></city-header>
    <city-hot></city-hot>
  </div>
</template>
<script>
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
export default {
  components:{
    CityHeader,
    CityHot
  }
}
</script>
<style scoped>
.city{
  background:#f5f5f5 ;
}
</style>
