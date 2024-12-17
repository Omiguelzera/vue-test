<template>     
     <div class="detalhes-overlay" @click.self="$emit('fechar')">
      <div class="detalhes-modal">
        <button class="close-button" @click="$emit('fechar')">&times;</button>
        <h2>{{ guaxinin.nome }}</h2>
        <div class="guaxiin-image">
            <img :src="guaxinin.imagem" :alt="guaxinin.nome"  />
        </div>
        <p>{{ guaxinin.detalhes }}</p>
      </div>
     </div>
  </template>
  
  <script>
  export default {
    props: {
      guaxinin: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>

  .detalhes-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .detalhes-modal {
    background: white;
    padding: 35px;
    border-radius: 20px;
    max-width: 500px;
    width: 100%;
    height: 600px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  .detalhes-modal h2 {
    color:#000000;
    font-size: 1.5rem;
  }
  .detalhes-modal p {
    width: 100%;
    height: 50px;
    color: #333;
    font-size: 70%; 
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
  }
  .close-button:hover {
    color: #000;
  }
 .guaxiin-image {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border: 40px;
  }

  
  </style>
  