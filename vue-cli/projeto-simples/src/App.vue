<template>
<div id="app"> {{ titulo }}</div>
<button type="button" @click="clickMe"> Clique aqui </button>
</template>

<script>

export default {
  data: function(){
    return {
      titulo: "Aprendendo novamente vue, agora com componentes"
    }
  },
  methods: {
    clickMe(){
      this.titulo += " << Bora Pra cima!! >>"
    }
  }
}
</script>

<style>
#app {
  background-color: black;
  color: aqua;
  font-weight: bold;
}

</style>
