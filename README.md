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

=======
![image](https://github.com/Fizzbow/firstwebapp/blob/main/src/assets/%E5%8E%BB%E5%93%AA%E5%84%BFimg/%E5%AD%97%E6%AF%8D%E7%B4%A2%E5%BC%95.gif)
>>>>>>> 306edea8bc055c2a13f29ef726f54b5b04832c45
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
<<<<<<< HEAD
=======
![image](https://github.com/Fizzbow/firstwebapp/blob/main/src/assets/%E5%8E%BB%E5%93%AA%E5%84%BFimg/%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.gif)
>>>>>>> 306edea8bc055c2a13f29ef726f54b5b04832c45

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

