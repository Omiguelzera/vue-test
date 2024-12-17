
<template>
    <div :class="['app-container', theme]">
      <nav class="navbar">
              <div class="navbar-content">
                  <img src="@/assets/raccoon.png" alt="Guaxinim-Icon" class="navbar-icon">
                  <h1 class="navbar-title">Guaxinins - Exploradores da Noite</h1>
                  <button @click="alterarTema">
                     Alterar Tema {{ theme === 'dark' ? 'Light' : 'Dark' }}
                  </button>
              </div>
          </nav>
      <header>
        <p>Clique nos guaxinins para aprender mais sobre eles!</p>
      </header>
  
      <div class="content">
        <GuaxininGallery
          :guaxinins="guaxinins"
          @selecionar="selecionarGuaxinin"
        />
  
        <GuaxininsDetalhes
          v-if="guaxininSelecionado"
          :guaxinin="guaxininSelecionado"
          @fechar="fecharDetalhes"
        />
      </div>
  
      <footer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Beatae illum sapiente necessitatibus asperiores quae quidem voluptas qui 
          repellendus repudiandae cumque ullam quia unde molestias accusantium cupiditate aut hic, doloribus dolor.
        </p>
      </footer>
  
    </div>
  </template>
  
  <script>
  import GuaxininGallery from '@/components/GuaxininsGallery.vue'; 
  import GuaxininsDetalhes from '@/components/GuaxininsDetalhes.vue';
  import guaxinimComum from '@/assets/Guaxinim-Comum.jpg';
  import guaxinimAlbino from '@/assets/Guaxinim-Albino-2.0.jpg';
  import guaxinimGigante from '@/assets/Guaxinim-Gigante.jpg';
  
  export default {
    name: 'PageGuaxinim',
    components: {
      GuaxininGallery,
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
            detalhes:
              "O guaxinim comum é amplamente reconhecido por sua máscara preta característica ao redor dos olhos, que atua como uma camuflagem natural, reduzindo o reflexo da luz e ajudando-o a enxergar melhor à noite. Esses animais são incrivelmente habilidosos e curiosos, capazes de usar suas patas semelhantes às mãos humanas para abrir latas de lixo, destrancar portões e até manipular objetos complexos. Além disso, estudos mostram que eles possuem uma memória excepcional, sendo capazes de lembrar soluções para problemas por até três anos. Essa inteligência os torna mestres na exploração urbana.",
          },
          {
            id: 2,
            nome: "Guaxinim Albino",
            imagem: guaxinimAlbino,
            detalhes:
              "O guaxinim albino é uma variação extremamente rara, resultante de uma condição genética que impede a produção de melanina, o pigmento responsável por dar cor à pele, pelagem e olhos. Por conta disso, ele possui uma pelagem inteiramente branca e olhos avermelhados, que refletem os vasos sanguíneos subjacentes. Essa coloração única pode torná-lo mais visível a predadores e, por isso, sua sobrevivência na natureza é um desafio. Além disso, sua sensibilidade à luz é maior, tornando-o mais dependente de habitats sombreados. Apesar dessas dificuldades, guaxinins albinos são fascinantes exemplos da diversidade genética dentro da espécie.",
          },
          {
            id: 3,
            nome: "Guaxinim Gigante",
            imagem: guaxinimGigante,
            detalhes:
              "Embora raros, alguns guaxinins podem atingir tamanhos surpreendentes, chegando a pesar mais de 15 quilos em condições ideais, especialmente em áreas urbanas onde o acesso a alimentos é abundante. Esses 'gigantes urbanos' se destacam não apenas pelo porte impressionante, mas também pela capacidade de dominar territórios, intimidando outros guaxinins e até mesmo animais de maior porte. Essa adaptação geralmente ocorre em cidades, onde eles encontram lixeiras repletas de restos de comida e locais protegidos para descanso. Apesar de seu tamanho, eles mantêm a mesma agilidade e inteligência que caracteriza a espécie, tornando-se verdadeiros 'reis do lixo urbano' e protagonistas de muitas histórias curiosas em comunidades humanas.",
          },
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
  
  <style scoped>
  
  .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 150%;
      height: 90px;
      background-color: #000000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    }
  
  .navbar-content{
    display: flex;
    align-items: center;
  }
  
  .navbar-icon {
    width: 100px;
    height: 100px;
    margin-right: 370px;
  }
  
  .navbar-title {
    font-size: 1.5rem;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-family: 'Comic Sans MS', sans-serif; 
    font-size: 3rem;
    text-align: center;
    color: #333; 
    background-color: #f5f5f5; 
    border: 5px solid #333; 
    padding: 15px 25px;
    margin: 20px auto;
    width: fit-content; 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); 
    background: linear-gradient(to right, #b0c4de, #d3d3d3); 
  }
  
  .app-container.dark p{
    margin-top: 80px;
    padding: 20px;
    font-family: 'Comic Sans MS', sans-serif; 
    font-size: 1.5rem;
    text-align: center;
    color: #f7f5f5; 
  }
  
  .app-container.light p{
    margin-top: 80px;
    padding: 20px;
    font-family: 'Comic Sans MS', sans-serif; 
    font-size: 1.5rem;
    text-align: center;
    color: #030303; 
  }
  
  
  h1:before {
    content: '🐾 '; 
    font-size: 1.5rem;
  }
  
  h1:after {
    content: ' 🐾'; 
    font-size: 1.5rem;
  }
  
  h1:hover {
    background: linear-gradient(to right, #696969, #333); 
    transform: rotate(-2deg) scale(1.05); 
    cursor: pointer;
  }
  
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
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      padding: 15px;
  }
  .app-container.dark {
      background: linear-gradient(35deg, #000 25%, rgba(65, 78, 88, 5) 60%, #000 80%);
      color: white;
  }
  .app-container.light {
      background: linear-gradient(35deg, #fff 25%, #ccc 40%, #ccc 40%, #fff 80%);
      color: black
  }
  button{
      position: fixed;
      top: 20px;
      right: 20px;
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
  