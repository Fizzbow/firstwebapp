<template>
  <div class="vacation">
    <div class="vacation-title">
      周末去哪儿
    </div>
  <ul>
    <li class="vacation-item" v-for="item in vacationList" :key="item.id">
      <div class="vacation-img">
        <img :src="item.imgUrl">
      </div>
      <div class="vacation-msg">
        <p>{{ item.title }}</p>
        <p>{{ item.msg }}</p>
      </div>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      vacationList:[
        {
          id:'01',
          imgUrl:'https://imgs.qunarzz.com/p/tts1/1806/90/bc6289412c512402.jpg',
          title:'漂流涌进，烧烤露营',
          msg:'轻松水上漂，任我乐逍遥'
        },
        {
          id:'02',
          imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/bd9bd49b-cfc3-4222-98fe-4719716266a8.jpg',
          title:'漂流涌进，烧烤露营',
          msg:'轻松水上漂，任我乐逍遥'
        },
        {
          id:'03',
          imgUrl:'https://imgs.qunarzz.com/p/tts1/1806/90/bc6289412c512402.jpg',
          title:'漂流涌进，烧烤露营',
          msg:'轻松水上漂，任我乐逍遥'
        }
      ]
    }
  }
}
</script>
<style>
.vacation-title{
  font-size: .32rem;
  padding: .24rem;
}
.vacation-item{
  background: #fff;
  font-size: .28rem;
  margin-bottom: .1rem;
}
.vacation-img{
  width: 100%;
  height: 4rem;
}
.vacation-img img{
  width: 100%;
}
.vacation-msg{
  padding:.2rem 0 .2rem .2rem;
}
.vacation-msg p{
  margin-top: .2rem;
}
.vacation-msg p+p{
  color: #616161;
  font-size: .24rem;
}
</style>
