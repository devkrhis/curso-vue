<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <hr>
        <button type="button" @click="trocarNome"> Trocar Nome</button>
        <div class="componentes">
            <AppUsuarioInfo :nome="nome" />
            <AppUsuarioEditar />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { 
        AppUsuarioInfo, 
        AppUsuarioEditar
    },
    data(){
        return {
            nome: 'Pedro'
        }
    },
    methods: {
        trocarNome(){
            this.nome = "Ana"
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
