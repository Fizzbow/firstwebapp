# firstwebapp
## 项目运行
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 技术栈
> vue2 + vuex + vue-router + webpack + stylus

## vue-router路由跳转

### Vue组件通信
#### 父子组件之间的数据通信
> -父组件向后台请求数据(只需请求一次)，把父组件的数据传递给子组件
```angular2html
//axios请求数据
  this.$http.get('./api/city.json').then((res) => {
        // console.log(res.data.data)
        let data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      })
    }
```
#### vuex实现子组件通信
> home子页面到city子页面实现相互跳转，将对应城市的json数据渲染到页面上

### keep-alive优化
keep-alive能使组件数据缓存，当数据重复请求的时候只会请求一次
```angular2html
<div id="app">
    <keep-alive>
      <router-view exclude = "detail"></router-view>
    </keep-alive>
  </div>
```
设置exclude的作用是为了进入详情页面的时候不缓存数据

