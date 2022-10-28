<template>
<div id="app"> {{ titulo }} </div>
<button type="button" @click="clickMe"> Clica ai</button>
</template>

<script>
export default {
  data: function(){
    return {
      titulo: 'Teste Data usando Vue JS!!'
    }
  },
  methods: {
    clickMe(){
      this.titulo += "$#"
    }
  }

}
</script>

<style>
  #app{
    background-color: chocolate;
    color: #fff;
  }

</style>