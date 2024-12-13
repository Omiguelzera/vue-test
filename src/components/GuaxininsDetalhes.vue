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
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
.modal-content {
    background: rgb(172, 53, 53);
    padding: 20px;
    border-radius: 5px;
    max-width: 600px;
    width: 100%;
}
button {
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
}
.guaxinim-img {
    width:50%;
    max-width: 80%;
    justify-content: center;
    height: auto;
    border-radius: 30px;
    box-shadow: 1px 1px 10px -1px #000000;
}
</style>
