<template>
  <div id="app">
    <menuNavegacaoVue/>
    <desafioComponenteVue/>
    <itensFotosVue/>
    <rodapeDesafioVue/>
  </div>
</template>

<script>
import menuNavegacaoVue from './components/menuNavegacao.vue';
import desafioComponenteVue from './components/desafioComponente.vue';
import itensFotosVue from './components/itensFotos.vue';
import rodapeDesafioVue from './components/rodapeDesafio.vue';
export default {
      name: 'App',
      components: {
        menuNavegacaoVue,
        desafioComponenteVue,
        itensFotosVue,
        rodapeDesafioVue
  }
}
</script>

<style>
</style>
