
<template>
  <div :class="['app-container', theme]">
      <header>
          <h1>Guaxinins - Exploradores da Noite</h1>
          <p>Clique nos guaxinins para aprender mais sobre eles!</p>
          <button @click="alterarTema">Alterar Tema {{ theme == 'dark' ? 'Light' : 'Dark' }}</button>
      </header>

      <div class="content">
          <div class="gallery">
              <div
                  v-for="guaxinin in guaxinins"
                  :key="guaxinin.id"
                  class="card"
                  @click="selecionarGuaxinin(guaxinin)"
              >
                  <img :src="guaxinin.imagem" :alt="guaxinin.nome" class="guaxinin-image" > 
                  <h3>{{ guaxinin.nome }}</h3>
              </div>
          </div>

          <!-- Show the details modal or section if a guaxinin is selected -->
          <GuaxininsDetalhes 
              v-if="guaxininSelecionado"
              :guaxinin="guaxininSelecionado"
              @fechar="fecharDetalhes"
          />
      </div>
  </div>
</template>
<style scoped>
.guaxinin-image {
  width: 80%; 
  height: 150%;
  max-width: 150px; 
  height: auto; 
  border-radius: 30px;
  object-fit: cover;
  box-shadow: 1px 1px 10px -1px #000000;
}
.app-container {
    min-height: 150vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
}
.app-container.dark {
    background: linear-gradient(35deg, #000 25%, rgb(1, 97, 175) 40%, #000 80%);
    color: white;
}
.app-container.light {
    background: linear-gradient(35deg, #fff 25%, #ccc 40%, #ccc 40%, #fff 80%);
    color: black
}
button{
    background-color: #333;
    color: white;
    border:none;
    padding: 10px 20px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;    
}
button:hover{
    background-color: #555;
}
.app-container.light button {
  background-color: #979797;
  color: black;
}

.app-container.light button:hover {
  background-color: #807e7e;
}
</style>
<script>
// Import the GuaxininsDetalhes component
import GuaxininsDetalhes from './components/GuaxininsDetalhes.vue';
import guaxinimComum from '@/assets/Guaxinim-Comum.jpg';
import guaxinimAlbino from '@/assets/Guaxinim-Albino-2.0.jpg';
import guaxinimGigante from '@/assets/Guaxinim-Gigante.jpg';

export default {
  components: {
      GuaxininsDetalhes
  },   
  data() {
      return {
        theme: 'dark',
          guaxinins: [
              {
                  id: 1,
                  nome: "Guaxinim Comum",
                  imagem: guaxinimComum,
                  detalhes: "O guaxinim comum é conhecido por sua máscara preta e sua habilidade de abrir latas de lixo."
              },
              {
                  id: 2,
                  nome: "Guaxinim Albino",
                  imagem: guaxinimAlbino,
                  detalhes: "O guaxinim albino é uma variação rara, caracterizada pela sua pelagem branca e olhos vermelhos."
              },
              {
                  id: 3,
                  nome: "Guaxinim Gigante",
                  imagem: guaxinimGigante,
                  detalhes: "Embora raro, alguns guaxinins podem atingir tamanhos impressionantes, tornando-se os reis do lixo urbano."
              }
          ],
          guaxininSelecionado: null
      };
  },
  methods: {
      selecionarGuaxinin(guaxinin) {
          this.guaxininSelecionado = guaxinin;
      },
      fecharDetalhes() {
          this.guaxininSelecionado = null;
      },
      alterarTema() {
          this.theme = this.theme === 'dark' ? 'light' : 'dark';
      }
  }
};
</script>
