<template>
    <div class="index">
        <ul> <li> {{ Valores }} </li> </ul> <!-- Mostrar os valores -->
        <ul> <li> <a href="https://github.com/krhistopher" target="_blank"> {{ Portfolio }} </a> </li> </ul> <!-- Redirecionar para o github-->
        <ul> <li> <a href="https://www.linkedin.com/in/krhistopher-kauling-novak-b4364712a/" target="_blank"> {{ Contato }} </a> </li> </ul> <!-- Redirecionar para Contato-->
    </div>
</template>

<script>
export default {
    /* eslint-disable */
    props: ['Valores','Portfolio','Contato']

}
</script>

<style scoped>
.index{
    border: 1px solid black;
}

</style>