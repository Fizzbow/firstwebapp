<template>
  <div class="like">
    <div class="like-top">
      <span class="love">💕</span>
      猜你喜欢
    </div>

    <ul>
      <li class="like-item border-bottom" v-for="item in likeList" :key="item.id">
        <div class="like-img">
<!--          <img :src="item.imgUrl">-->
          <img :src="item.imgUrl">
        </div>
        <div class="like-text">
          <div class="like-title">
            {{ item.title }}
          </div>
          <div class="like-message">
            {{ item.msg }}
          </div>
          <div class="like-map">
            <span class="like-mark">￥<b>{{ item.pre }}</b></span>起
            <span class="like-item-map">{{ item.map }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      likeList:[
        {
          id:'01',
          imgUrl:'https://img1.qunarzz.com/sight/p0/1602/e6/e655d7ee86c7fd1390.water.jpg_256x160_cd5ed61c.jpg',
          title:'科技馆',
          msg:'1314条评论',
          pre:'18.8',
          map:'平谷区'
        },
        {
          id:'02',
          imgUrl:'https://img1.qunarzz.com/sight/p0/1602/e6/e655d7ee86c7fd1390.water.jpg_256x160_cd5ed61c.jpg',
          title:'科技馆',
          msg:'1352条评论',
          pre:'19.8',
          map:'平谷区'
        }
      ]
    }
  }
}
</script>
<style scoped>
.like{
  margin-top: .2rem;
  font-size: .28rem;
  background: #fff;
  padding: 0 .2rem;
}
.like-top{
  padding: 0.2rem 0;
  font-size: .32rem;
}
.like-item{
  position: relative;
  padding: .2rem 0;
  overflow: hidden;
}
.like-img{
  float: left;
}
.like-img img{
  width: 2rem;
  height: 2rem;
}
.like-title{
  font-size: .36rem;
  color: #212121;
  margin-top: .4rem;
}
.like-message{
  margin-top: .3rem;
  color: #616161;
  font-size: .24rem;
}
.like-map{
  margin-top: .3rem;
  color: #616161;
  position: relative;
}
.like-mark{
  color: #ff8300;
}
.like-mark b{
  font-size: .4rem;
}
.like-item-map{
  font-size: .24rem;
  position: absolute;
  right: 0;
  margin-top: .1rem;
}
</style>
