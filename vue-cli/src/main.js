import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // render : 함수 - 템플릿 속성 정의했을때 사용됨.
}).$mount('#app')
