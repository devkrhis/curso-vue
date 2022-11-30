<template>
    <div id="controller">
        <pokemonIndex :valores="Valores" :portfolio="Portfolio" :contato="Contato"/>
        <button type="button" @click="changeName"> Clique para ver os Valores</button>
        <hr>
        <pokemonHome :iniciarJogo="iniciarJogo" :desistir="desistir"/>
        <div v-if="this.iniciarJogo == false">
            <button type="button" @click="iniciarGame" class="startGameController" > <strong> Iniciar Jogo </strong></button>
        </div>
        <pokemonLog/>
    </div>
    
    
    
</template>

<script>

import pokemonIndex from './pokemonIndex.vue';
import pokemonHome from './pokemonHome.vue';
import pokemonLog from './pokemonLog.vue';

export default {
    /* eslint-disable */
    components: {
        pokemonIndex,
        pokemonHome,
        pokemonLog,
    },
    data(){
        return {
            Valores: "Valores",
            Portfolio: "Portfolio",
            Contato: "Contato",
            iniciarJogo: false,
        }
    },
    methods: {
        changeName(){
            this.Valores = "Lealdade, Honestidade e Respeito"
        },
        iniciarGame(){
            this.iniciarJogo = true
        },
    }
}
</script>

<style scoped>

.startGameController{
    margin-left: 48%;
    margin-top: 1%;
    border-radius: 50%;
    display: inline-block;
    height: 100px;
    width: 100px;
    border: 1px solid #ffffff69;
    background-color: #f6bd20;
    box-shadow: inset -10px -10px 10px rgba(0, 0, 0, 0.61), inset 3px 3px 5px #FFF;
}


</style>