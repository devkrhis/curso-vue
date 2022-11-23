<template>
    <div id="index">
        <ul> <li> Sobre Nós: {{ descricao }} </li> </ul>
        <ul> <li> Serviços </li> </ul>
        <ul> <li> Portfolio </li> </ul>
        <ul> <li> Contato </li> </ul>
    </div>
</template>

<script>
export default {
    props: [
        ['descricao']
    ]

}
</script>

<style scoped>
index{
    background-color: black;
}

</style>