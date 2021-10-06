<template>
  <div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
      <li class="hot-item"
      v-for="item in hotCities"
          :key="item.id"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  props:['hotCities']
}
</script>
<style scoped>
.hot-title{
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}
.hot-list{
  position: relative;
  overflow: hidden;
  background: #fff;
  font-size: .28rem;
}
.hot-list:before{
  content: '';
  position: absolute;
  height: 100%;
  width: 33.33333%;
  left: 33.3333%;
  border-left: .03rem solid #ddd;
  border-right: .03rem solid #ddd;
}
.hot-item{
  width: 33.33333%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
  border-bottom: .02rem solid #ddd;
}
</style>
