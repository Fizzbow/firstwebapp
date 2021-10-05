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
  props:['vacationList'],
  data(){
    return{
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
