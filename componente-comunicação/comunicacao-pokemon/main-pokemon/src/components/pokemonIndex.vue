<template>
    <div class="index">
        <ul> <img alt="pokedex" src="@/assets/pokeDex2.png"> {{ Valores }} </ul> <!-- Mostrar os valores -->
        <ul> <img alt="pokedex" src="@/assets/pokeDex2.png"> <a href="https://github.com/krhistopher" target="_blank"> {{ Portfolio }} </a> </ul> <!-- Redirecionar para o github-->
        <ul> <img alt="pokedex" src="@/assets/pokeDex2.png"> <a href="https://www.linkedin.com/in/krhistopher-kauling-novak-b4364712a/" target="_blank"> {{ Contato }} </a> </ul> <!-- Redirecionar para Contato-->
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
    text-decoration: none;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background-color: #f6bd20;
    margin-bottom: 0.5%;
    color: #442c8ddc;
}

.index img {
    height: 10px;
}

.index :hover {
    transition: 1s;
    color: rgb(0, 0, 0);
    font-size: x-large;
}

</style>