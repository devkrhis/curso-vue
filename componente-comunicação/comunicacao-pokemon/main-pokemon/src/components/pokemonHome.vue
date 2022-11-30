<template>
    <div class="controleGeralPokemon" v-if="iniciarJogo == true">
        <h1 class="matadorPokemon"> Matador de Pokemon </h1>
        <div class="lifeBar">
            <h3> Vida de Jogador
                <div class="lifePlayer"> 
                    <div class="sublifePlayer"></div>
                </div>
            </h3>
            
            <h3> Vida do Monstro
                <div class="lifeMonster"> 
                    <div class="sublifeMonster"></div>
                </div>
            </h3>
        </div>
        <div class="selectionOfButtons">
            <button type="button" @click="atack"> Ataque </button>
            <button type="button"> Ataque Especial </button>
            <button type="button"> Curar </button>
            <button type="button"> Desistir </button>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['iniciarJogo'],
    data(){
        return {
            width: 100,
            dano: 0

        }
    },
    methods: {
        atack(){
            this.dano = this.ataque = Math.floor(Math.random() * 8)
            console.log(this.width)
            console.log(this.dano)
            console.log("width: " - this.width - this.dano)
            return("this.width: " - this.dano)
            

        },

    }

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

.sublifePlayer{
    background-color: green;
    border: 1px solid black;
    padding: 3.3%;
    margin-top: -3.2%;
    margin-left: -3.5%;
    width: 100%;
}

.lifeMonster{
    height: 5%;
    width: 250%;
    padding: 8%;
    border: 1px solid black;
    margin-left: -80%;

}

.sublifeMonster{
    background-color: green;
    border: 1px solid black;
    padding: 3.3%;
    margin-top: -3.2%;
    margin-left: -3.5%;
    width: 100%;
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