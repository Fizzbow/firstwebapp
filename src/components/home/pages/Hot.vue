<template>
<div class="hot">
  <div class="hot-top">
    <span>🔥</span>
    <span>本周热门榜单</span>
    <span class="hot-title">全部榜单 ></span>
  </div>
  <ul class="hot-list" >
    <li class="hot-item" v-for="item in hotList">
      <img :src="item.imgUrl">
      <p>{{ item.title }}</p>
      <p>
        <span class="hot-mark">{{item.mark}}</span>起
      </p>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  props: ['hotList'],
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="stylus">
@import "~css/var.styl";
.hot{
  margin-top:.2rem;
  background: #fff;
  font-size: .28rem;
}
.hot-top{
  padding: .2rem;
  position: relative;
}
.hot-top span{
  color: #212121;
  font-size: .32rem;
}
.hot-top .hot-title{
  position: absolute;
  right: .2rem;
  color: #616161;
}
.hot-list{
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.hot-item{
  display: inline-block;
  padding: 0 .2rem;
  width: 2rem;
  height: 2rem;
}
.hot-item img{
  width: 100%;
  height: 100%;
}
.hot-item p{
  margin-top: .1rem;
  text-align: center;
  textOverflow();
}
.hot-item p .hot-mark{
  color: #ff8300;
  font-size: .32rem;
}
</style>
