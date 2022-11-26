<template>
    <div class="controleGeralPokemon">
        <h1 class="matadorPokemon"> Matador de Pokemon </h1>
        <div class="lifeBar">
            <h3> Vida de Jogador
                <div class="lifePlayer"> 

                </div>
            </h3>
            
            <h3> Vida do Monstro
                <div class="lifeMonster"> 

                </div>
            </h3>
            
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>

.controleGeralPokemon{
    border: 1px solid black
}

.matadorPokemon{
    display: flex;
    justify-content: center;
}

.lifeBar{
    display: flex;
    justify-content: space-evenly;
}

.lifePlayer{
    height: 5%;
    width: 250%;
    padding: 8%;
    border: 1px solid black;
}

.lifeMonster{
    height: 5%;
    width: 250%;
    padding: 8%;
    border: 1px solid black;

}

</style>