import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'  //now we don't have to import in all components that we'll use the store


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,   ///this is where  it is passed as an option 

  //we access the store in our components as this.$store
  render: h => h(App)
})
