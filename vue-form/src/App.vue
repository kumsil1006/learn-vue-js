<template>
  <form v-on:submit.prevent="submitForm"> <!--event.preventDefault();와 같은 동작 수행 -->
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: 'myForm',
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function () {
      //event.preventDefault(); // submit 눌러도 다음 페이지로 안 넘어감
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data) // 브라우저로 서버로 데이터 주고받기 위해 사용
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>