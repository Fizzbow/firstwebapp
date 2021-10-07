import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaltCity = '上海';
defaltCity = localStorage.city;

const state ={
  city:defaltCity
}
const mutations ={
  changeCity(state,cityName){
    this.state.city = cityName;
    localStorage.city = cityName;
  }
}
export default new Vuex.Store({
  state,
  mutations
})
