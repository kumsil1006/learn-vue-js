<template>
  <div> <!-- 최상위 레벨은 무조건 하나여야 함 : template root는 하나만 정의되어 있어야 한다. -->
    <!-- {{ str }} -->
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"/> -->
    <app-header v-bind:propsdata="str" v-on:changeText="renewString"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  // 문법 규칙  
  name: 'myApp',
  data: function() {
    return {
      str: 'header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewString: function() {
      this.str = 'hihi!!'
    }
  }
}
</script>

<style>

</style>