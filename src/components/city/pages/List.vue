<template>
  <div class="list">
    <div v-for="(val,key) in cities">
      <div class="list-title">{{ key }}</div>
      <ul class="list-msg">
        <li class="list-item"  v-for="item in val" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:['cities']
}
</script>
<style scoped lang="stylus">
@import "~css/var.styl"
.list-title{
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}
.list-msg{
  position: relative;
  background: #fff;
  overflow: hidden;
}
.list-msg:before{
  content: '';
  left: 25%;
  width: 25%;
  height: 100%;
  position: absolute;
  border-left: .03rem solid #ddd;
  border-right: .03rem solid #ddd;
}
.list-msg:after{
  content: '';
  position: absolute;
  left: 75%;
  width: 25%;
  height: 100%;
  border-left: .02rem solid #ddd;
}
.list-item{
  textOverflow();
  width: 25%;
  font-size: .28rem;
  text-align: center;
  line-height: .9rem;
  float: left;
  border-bottom: .03rem solid #ddd;
}

</style>
