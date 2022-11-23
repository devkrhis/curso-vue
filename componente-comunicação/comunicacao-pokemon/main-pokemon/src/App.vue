

<template>
  <div id="app">
    <pokemonIndex :descricao="descricao"/>
    <button type="button" @click="changeDescription"> Change Description</button>
  </div>
</template>

<script>

import pokemonIndex from "./components/pokemonIndex.vue";

export default {
/* eslint-disable */
  name: 'App',
  components: {
    pokemonIndex
  },
  data(){
    return {
      descricao: "Teste"

    }
  },
  methods: {
    changeDescription(){
      this.descricao = "Alteração realizada com Sucesso"
    }

  }
}
</script>

<style>
</style>
