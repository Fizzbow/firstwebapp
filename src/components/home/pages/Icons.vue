<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for ="item in page" :key="item.id">
        <div class="icons-item" v-for="page in item" :key="item.id">
          <img :src="page.imgUrl">
          <p>{{page.title}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>
<script>
export default {
  data(){
    return{
      swiperOptions:{},
      iconList:[
        {
          id:'01',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title:'xsdd'
        },
        {
          id:'02',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'sjhdjn'
        },
        {
          id:'03',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'hbjhj'
        },
        {
          id:'04',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'khksjdka'
        },
        {
          id:'05',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'ks21lk'
        },
        {
          id:'06',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'jsbdns'
        },
        {
          id:'07',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'ksdlk'
        },
        {
          id:'08',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'ksdlk'
        },
        {
          id:'09',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'ksdlk'
        },
        {
          id:'10',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          title: 'shdjk'
        }
      ]
    }
  },
  computed:{
    page(){
      let pages = [];
      this.iconList.forEach((item,index) =>{
        let idx = Math.floor(index/8);
        if (!pages[idx]) pages[idx] = [];
        pages[idx].push(item)
      })

      return pages;
    }
  }
}
</script>
<style scoped>
.icons{
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.icons-item{
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
}
.icons-item img{
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: .1rem;
}
.icons-item p{
  margin-top: .1rem;
  font-size:.28rem;
  text-align: center;
  color: #212121;
}
</style>
