
<template>
  <div class="login-page">
      <div class="login-box">
          <h2>Login</h2>
          <form @submit.prevent="HandleLogin">
              <div class="form-group">
                  <label for="username">Username:</label>
                  <input type="text" id="username" v-model="username" placeholder="Enter your username" required/>
                  </div>
                  <div class="form-group">
                      <label for="password">Password:</label>
                      <input type="password" id="password" v-model="password" placeholder="Enter your password" required/>
                  </div>
                      <button type="submit">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          username: 'Guaxinim',
          password: '123456'
      };
  },
  methods: {
      HandleLogin() {
          if(this.username === this.username && this.password === this.password) {
              this.$router.push('/app');
          }else{
              alert('Invalid username or password');
          }
      }
  }
};
</script>

