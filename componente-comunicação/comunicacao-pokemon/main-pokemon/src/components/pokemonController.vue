<template>
    <div id="controller">
        <pokemonIndex :valores="Valores" :portfolio="Portfolio" :contato="Contato"/>
        <button type="button" @click="changeName"> Change "Valores"</button>
    </div>
    
</template>

<script>

import pokemonIndex from './pokemonIndex.vue';

export default {
    /* eslint-disable */
    components: {
        pokemonIndex,
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