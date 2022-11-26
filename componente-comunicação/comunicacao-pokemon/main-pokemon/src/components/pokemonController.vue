<template>
    <div id="controller">
        <pokemonIndex :valores="Valores" :portfolio="Portfolio" :contato="Contato"/>
        <button type="button" @click="changeName"> Change "Valores"</button>
        <hr>
        <pokemonHome/>
    </div>
    
    
    
</template>

<script>

import pokemonIndex from './pokemonIndex.vue';
import pokemonHome from './pokemonHome.vue';

export default {
    /* eslint-disable */
    components: {
        pokemonIndex,
        pokemonHome,
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
            this.Valores = "Alteração realizada com sucesso"
        }
    }
}
</script>

<style scoped>

</style>