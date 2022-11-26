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
        <div class="selectionOfButtons">
            <button type="button"> Ataque </button>
            <button type="button"> Ataque Especial </button>
            <button type="button"> Curar </button>
            <button type="button"> Desistir </button>
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
    margin-left: -80%;
}

.lifeMonster{
    height: 5%;
    width: 250%;
    padding: 8%;
    border: 1px solid black;
    margin-left: -80%;

}
.selectionOfButtons {
    display: flex;
    justify-content: center;
}
.selectionOfButtons button {
    padding: 1%;
    margin: 2% 1% 0.5% 1%;
    color: red;
    border-radius: 30px;
}

</style>