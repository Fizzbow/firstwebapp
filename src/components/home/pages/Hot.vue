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
  data(){
    return{
      hotList:[
        {
          id:'01',
          imgUrl:'https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg',
          title:'故宫',
          mark:'$20'
        },
        {
          id:'02',
          imgUrl:'https://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_256x160_2c506073.jpg',
          title:'恭王府zzzzzzzzzzzzzzzzzzzzzzz',
          mark:'$10'
        },
        {
          id:'03',
          imgUrl:'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
          title:'长城',
          mark:'$50'
        },
        {
          id:'04',
          imgUrl:'https://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_256x160_618d3a8e.jpg',
          title:'圆明园',
          mark:'$50'
        },
        {
          id:'05',
          imgUrl:'https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg',
          title:'故宫',
          mark:'$20'
        }
      ]
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
