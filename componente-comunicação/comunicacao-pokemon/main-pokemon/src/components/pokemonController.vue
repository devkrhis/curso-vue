<template>
    <div id="controller">
        <pokemonIndex :valores="Valores" :portfolio="Portfolio" :contato="Contato"/>
        <button type="button" @click="changeName"> Clique para ver os Valores</button>
        <hr>
        <pokemonHome/>
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
            Contato: "Contato"
        }
    },
    methods: {
        changeName(){
            this.Valores = "Lealdade, Honestidade e Respeito"
        }
    }
}
</script>

<style scoped>


</style>