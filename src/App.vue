<template>
  <div id="app">
    <keep-alive  exclude = "Swiper">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
