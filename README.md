# firstwebapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 路由跳转
## vuex实现子组件通信

## keep-alive优化
keep-alive能使组件数据缓存，当数据重复请求的时候只会请求一次
```angular2html
<div id="app">
    <keep-alive>
      <router-view exclude = "detail"></router-view>
    </keep-alive>
  </div>
```
设置detail的作用是为了当进入详情页面的时候数据不缓存
##
