<template>
    <div class="modal" @click.self="fechar">
        <div class="modal-content">
            <h2>{{ guaxinin.nome }}</h2>
            <img :src="guaxinin.imagem" :alt="guaxinin.nome" class="guaxinim-img">
            <p>{{ guaxinin.detalhes }}</p>
            <button @click="fechar">Fechar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        guaxinin: Object
    },
    methods: {
        fechar() {
            this.$emit('fechar');
        }
    }
};
</script>

<style scoped>
h2:before {
  content: '🐾 '; 
  font-size: 1.5rem;
}

h2:after {
  content: ' 🐾'; 
  font-size: 1.5rem;
}

p:before{
    content: '🐾';
    font-size: 1.5rem;
}

p:after{
    content: ' 🐾';
    font-size: 1.5rem;
}

.modal {
    position: fixed;
    top: 30px;
    left: 0;
    right: 25px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
.modal-content {
    font-family: 'Comic Sans MS', sans-serif;
    font-size: 1rem;
    color: #333;
    background-color: #f5f5f5;
    border: 5px solid #333;
    padding: 20px;
    border-radius: 5px;
    max-width: 600px;
    width: 100%;
}
button {
    background-color: #333;
    color: white;
    border:none;
    padding: 10px 20px;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
}
.guaxinim-img {
    width:50%;
    max-width: 80%;
    justify-content: center;
    height: auto;
    border-radius: 30px;
    box-shadow: 1px 1px 10px -1px #000000;
}

@media (max-width: 768px) {
    .modal-content {
        padding: 15px;
        font-size: 0.9rem; /* Reduz o tamanho do texto */
    }
    button {
        padding: 8px 15px;
    }
}

@media (max-width: 480px) {
    .modal-content {
        padding: 10px;
        font-size: 0.8rem;
    }
    h2 {
        font-size: 1.2rem; /* Reduz o tamanho do título */
    }
    button {
        padding: 6px 12px;
    }
}
</style>
