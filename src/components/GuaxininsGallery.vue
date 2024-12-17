<template>
    <div class="gallery">
      <div
        v-for="guaxinin in guaxinins"
        :key="guaxinin.id"
        class="card"
        @click="$emit('selecionar', guaxinin)"
      >
        <img :src="guaxinin.imagem" :alt="guaxinin.nome" class="guaxinin-image" />
        <h3>{{ guaxinin.nome }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      guaxinins: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
  .card {
    cursor: pointer;
    padding: 25px;
    border-radius: 15px;
    background-color: #f9f9f9;
    text-align: center;
    box-shadow: 0 2px 8px rgba(241, 2, 2, 0.952);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  .guaxinin-image {
    width: 100%;
    height: auto;
    max-width: 200px;
    border-radius: 15px;
    object-fit: cover;
  }
  </style>
  