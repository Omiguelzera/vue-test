
<template>
  <div class="login-page">
      <div class="login-box">
          <h2>Login</h2>
          <form @submit.prevent="HandleLogin">
              <div class="form-group">
                  <label for="username">Username:</label>
                  <input type="text" id="username" v-model="username" placeholder="Enter your username" :class="{'input-error': error.username}" required/>
                  </div>
                  <div class="form-group">
                      <label for="password">Password:</label>
                      <input type="password" id="password" v-model="password" placeholder="Enter your password" :class="{'input-error': error.password}" required/>
                  </div>
                      <button type="submit">Login</button>
                      <p v-if="error.message" class="error-message">{{ error.message }}</p>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AppContainer',
  data() {
      return {
          username: 'Guaxinim',
          password: '123456',
          error:{
            username: false,
            password: false,
            message: "",
          },
          //simulando um banco de dados
          users:[
            {
                username: "Guaxinim",
                password: "123456"
            },
            {
                username: "Guaxinim",
                password: "654321"
            },
          ],
      };
  },
  methods: {
      HandleLogin() {
          this.error = {username: false, password: false, message:""};

        if(!this.username){
            this.error.username = true;
            this.error.message = "O campo username é obrigatório";
            return;
        }
        if(!this.password){
            this.error.password = true;
            this.error.message = "O campo password é obrigatório";
            return;
        }

        //validar credenciais
        const user = this.users.find(
            (u) => u.username === this.username && u.password === this.password
        );

        if(user){
            //Redireciona se as credenciais forem válidas
            this.$router.push("/guaxinim");

        }else{
            this.error.message = "Credenciais inválidas";
        }

    }
  }
};
</script>
<style>
    .input-error{
        border: 2px solid #ff4d4d;
        background-color: #ffe6e6;
    }
    
    .error-message{
        color: #ff4d4d;
        font-size: 0.9rem;
        margin-top: 10px;
        text-align: center;
        
    }

    .login-page {
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: repeating-linear-gradient(
            45deg,
            #333333,
            #333333 10px,
            #4caf50 10px,
            #4caf50 20px
        );
    }
    .login-box{
        width: 300px;
        padding: 20px;
        text-align: center;
        background-color: #555555;
        border: 5px solid #333333;
        border-radius: 15px;
        box-shadow: 0 4px 5px rgba( 0, 0, 0, 0.5);
        color: white;
        font-family: "Comic Sans MS", sans-serif;
    }

    h2{
        font-size: 1.8rem;
        margin-bottom: 20px;
        color: #ffcc00;
        text-shadow: 1px 1px 5px black;
    }

    .form-group{
        margin-bottom:  15px;
    }
    label{
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
     
     input{
        width: 100%;
        padding: 10px;
        border: 2px solid #333333;
        border-radius: 5px;
        background-color: #f5f5f5;
        box-sizing: border-box;
    }
    button{
        background-color: #4caf50;
        color: white;
        border:none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    button:hover{
        background-color: #3e8e41;
        transform: scale(1.05);
    }
</style>
