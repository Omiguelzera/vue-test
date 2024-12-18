# vue-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




# Documentação do Projeto "Guaxinins - Exploradores da Noite"

Este documento abrange os principais aspectos e funcionalidades do projeto desenvolvido, incluindo estrutura, componentes, estilos, rotas, e lógica. O objetivo é fornecer uma referência completa para entender e manter o projeto.

---

## 1. Estrutura do Projeto

### Diretórios
- **src/**: Contém todo o código fonte.
  - **assets/**: Imagens e outros arquivos estáticos.
  - **components/**: Componentes Vue reutilizáveis.
  - **views/**: Páginas principais do projeto.
  - **router/**: Configuração de rotas Vue.
  - **App.vue**: Componente raiz do projeto.
  - **main.js**: Arquivo de entrada principal.

### Componentes Principais
1. **AppContainer.vue**: Componente de login.
2. **PageGuaxinim.vue**: Página principal para exibição de guaxinins.
3. **GuaxininsDetalhes.vue**: Modal de detalhes sobre guaxinins.

---

## 2. Funcionalidades

### Login
- **Validação de credenciais**:
  - O sistema verifica se o "username" e "password" coincidem com os dados de um "banco de dados" simulado.
  - Campos vazios são detectados e sinalizados.
  - Redirecionamento para a rota `/guaxinim` em caso de sucesso.

### Exibição de Guaxinins
- Listagem de guaxinins com imagem, nome e descrição.
- Modal detalhado para cada guaxinim com informações adicionais.

### Temática
- Interface com design inspirado nos guaxinins, com cores escuras e detalhes em verde.
- Ícones e efeitos visuais para aprimorar a experiência do usuário.

---

## 3. Rotas

### Configuração do `router/index.js`
```javascript
import { createRouter, createWebHistory } from "vue-router";
import PageGuaxinim from "@/PageGuaxinim.vue";
import AppContainer from "@/AppContainer.vue";

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: AppContainer },
  { path: '/guaxinim', component: PageGuaxinim }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

### Rotas Disponíveis
- `/login`: Tela de login.
- `/guaxinim`: Página principal dos guaxinins.

---

## 4. Estilos Globais

### Arquivo `src/assets/global.css`
```css
body {
  margin: 0;
  font-family: 'Comic Sans MS', sans-serif;
  background: repeating-linear-gradient(
    45deg,
    #333333,
    #333333 10px,
    #4caf50 10px,
    #4caf50 20px
  );
  color: white;
}

button {
  cursor: pointer;
  transition: all 0.3s ease;
}

img {
  max-width: 100%;
  height: auto;
}
```
---

## 5. Componentes Detalhados

### AppContainer.vue (Tela de Login)
```vue
<template>
  <div class="login-page">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            :class="{ 'input-error': error.username }"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            :class="{ 'input-error': error.password }"
            required
          />
        </div>
        <button type="submit">Login</button>
        <p v-if="error.message" class="error-message">{{ error.message }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContainer",
  data() {
    return {
      username: "",
      password: "",
      error: {
        username: false,
        password: false,
        message: "",
      },
      users: [
        { username: "Guaxinim", password: "123456" },
        { username: "RaccoonLover", password: "654321" },
      ],
    };
  },
  methods: {
    handleLogin() {
      this.error = { username: false, password: false, message: "" };

      if (!this.username) {
        this.error.username = true;
        this.error.message = "O campo de username não pode estar vazio.";
        return;
      }
      if (!this.password) {
        this.error.password = true;
        this.error.message = "O campo de senha não pode estar vazio.";
        return;
      }

      const user = this.users.find(
        (u) => u.username === this.username && u.password === this.password
      );

      if (user) {
        this.$router.push("/guaxinim");
      } else {
        this.error.message = "Usuário ou senha inválidos.";
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: repeating-linear-gradient(
    45deg,
    #333333,
    #333333 10px,
    #4caf50 10px,
    #4caf50 20px
  );
}

.login-box {
  width: 300px;
  padding: 20px;
  text-align: center;
  background-color: #555555;
  border: 5px solid #333333;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  color: white;
  font-family: "Comic Sans MS", sans-serif;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #3e8e41;
  transform: scale(1.05);
}

.input-error {
  border: 2px solid #ff4d4d;
  background-color: #ffe6e6;
}
.error-message {
  color: #ff4d4d;
  font-size: 0.9rem;
  margin-top: 10px;
  text-align: center;
}
</style>
```

---

O restante dos componentes, como **PageGuaxinim.vue** e **GuaxininsDetalhes.vue**, seguem uma estrutura similar com funcionalidades específicas detalhadas nos requisitos do projeto. Consulte o repositório para mais detalhes.


