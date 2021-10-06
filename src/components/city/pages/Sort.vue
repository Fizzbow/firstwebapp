<template>
  <div class="sort">
    <div class="sort-title">字母排序</div>
    <ul class="sort-list">
      <li class="sort-item"
      v-for="(val,key) in cities"
      >
        {{key}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:['cities']
}
</script>
<style scoped>
.sort-title{
  font-size: .24rem;
  color: #212121;
  padding: .2rem .3rem;
}
.sort-list{
  position: relative;
  overflow: hidden;
  background: #fff;
  font-size: .28rem;
}
.sort-item{
  width: 16.66666%;
  text-align: center;
  height: .9rem;
  line-height: .9rem;
  float: left;
}
</style>
