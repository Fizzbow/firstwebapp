<template>
  <div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
      <li class="hot-item">北京</li>
      <li class="hot-item">上海</li>
      <li class="hot-item">三亚</li>
      <li class="hot-item">北京</li>
      <li class="hot-item">上海</li>
      <li class="hot-item">杭州</li>
      <li class="hot-item">成都</li>
      <li class="hot-item">郑州</li>
      <li class="hot-item">上海</li>
    </ul>
  </div>
</template>
<script></script>
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
