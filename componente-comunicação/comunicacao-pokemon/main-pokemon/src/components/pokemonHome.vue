<template>
    <div class="controleGeralPokemon" v-if="iniciarJogo == true">
        <h1 class="matadorPokemon"> Matador de Pokemon </h1>
        <div class="lifeBar">
            <h3> Vida de Jogador
                <div class="lifePlayer"> 
                    <div class="sublifePlayer" :style="sublifePlayer"></div>
                    <strong> {{ this.danoRecebidoPlayer }}% </strong>
                </div>
            </h3>
            
            <h3> Vida do Monstro
                <div class="lifeMonster"> 
                    <div class="sublifeMonster" :style="sublifeMonster"></div>
                    <strong> {{ this.danoRecebidoMonster }}% </strong>
                </div>
            </h3>
        </div>
        <div class="selectionOfButtons">
            <button type="button" @click="attack"> Ataque </button>
            <button type="button" @click="specialAttack"> Ataque Especial </button>
            <button type="button" @click="heal"> Curar </button>
            <button type="button" @click="desist"> Desistir </button>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['iniciarJogo','Desistir'],
    data(){
        return {
            sublifeMonster: {
                width: '100%',
            },
            sublifePlayer: {
                width: '100%',
            },
            danoPlayer: 0,
            danoMonster: 0,
            danoRecebidoPlayer: 100,
            danoRecebidoMonster: 100,
            

        }
    },
    methods: {
        attack(){
            this.danoMonster = this.ataque = Math.floor(Math.random() * 8) // DANO QUE EU VOU DAR NO MONSTRO
            this.danoPlayer = this.ataque = Math.floor(Math.random() * 10) // DANO QUE EU VOU SOFRER

            this.danoRecebidoPlayer = parseInt(this.sublifePlayer.width)
            console.log(this.danoRecebidoPlayer, "Dano calculado")
            this.danoRecebidoMonster = parseInt(this.sublifeMonster.width)
            console.log(this.danoRecebidoMonster, "Dano calculado")

            console.log(this.sublifeMonster.width, "Dano tomado pelo monstro")
            console.log(this.sublifePlayer.width, "Dano tomado pelo player")
            this.sublifeMonster.width = parseInt(this.sublifeMonster.width) - this.danoMonster + '%'
            this.sublifePlayer.width = parseInt(this.sublifePlayer.width) - this.danoPlayer + '%'
            console.log(this.sublifePlayer.width)
            if(this.danoRecebidoPlayer <= 0){
                alert("Você Perdeu")
                this.sublifePlayer.width = "0%"
                this.danoRecebidoPlayer = 0
            } if (this.danoRecebidoMonster <= 0){
                alert("Você Ganhou")
                this.sublifeMonster.width = "0%"
                this.danoRecebidoMonster = 0
            }
        },
        specialAttack(){
            this.danoMonster = this.ataque = Math.floor(Math.random() * 15) // DANO QUE EU VOU DAR NO MONSTRO
            this.danoPlayer = this.ataque = Math.floor(Math.random() * 11) // DANO QUE EU VOU SOFRER

            this.danoRecebidoPlayer = parseInt(this.sublifePlayer.width) // AQUI E ONDE ESTOU DIMINUINDO A VIDA DO PLAYER
            console.log(this.danoRecebidoPlayer, "Dano calculado")
            this.danoRecebidoMonster = parseInt(this.sublifeMonster.width) // AQUI E ONDE ESTOU DIMINUIDO A VIDA DO MONSTRO
            console.log(this.danoRecebidoMonster, "Dano calculado")

            this.sublifeMonster.width = parseInt(this.sublifeMonster.width) - this.danoMonster + '%'
            this.sublifePlayer.width = parseInt(this.sublifePlayer.width) - this.danoPlayer + '%'
            console.log(this.sublifePlayer.width)


            if(this.danoRecebidoPlayer <= 0){
                alert("Você Perdeu")
                this.sublifePlayer.width = "0%"
                this.danoRecebidoPlayer = 0
            } if (this.danoRecebidoMonster <= 0){
                alert("Você Ganhou")
                this.sublifeMonster.width = "0%"
                this.danoRecebidoMonster = 0
            }
        },
        heal(){ // VERIFICAR PORQUE ESTÁ PASSANDO O HEAL
            this.danoMonster = this.curar = Math.floor(Math.random() * 15) // Curando o monstro
            this.danoPlayer = this.curar = Math.floor(Math.random() * 11) // Curando o player


            this.danoRecebidoPlayer = parseInt(this.sublifePlayer.width) // AQUI E ONDE ESTOU DIMINUINDO A VIDA DO PLAYER
            console.log(this.danoRecebidoPlayer, "Cura calculado")
            this.danoRecebidoMonster = parseInt(this.sublifeMonster.width) // AQUI E ONDE ESTOU DIMINUIDO A VIDA DO MONSTRO
            console.log(this.danoRecebidoMonster, "Cura calculado")

            this.sublifeMonster.width = parseInt(this.sublifeMonster.width) + this.danoMonster + '%'
            this.sublifePlayer.width = parseInt(this.sublifePlayer.width) + this.danoPlayer + '%'


            if(this.danoRecebidoPlayer >= 93){
                alert("Você PLAYER está com o maximo de vida")
                this.sublifePlayer.width = "100%"
                this.danoRecebidoPlayer = 100
            } if (this.danoRecebidoMonster >= 93){
                alert("Você MONSTER está com o maximo de vida")
                this.sublifeMonster.width = "100%"
                this.danoRecebidoMonster = 100
            }

        },
        desist(){
            this.sublifePlayer.width = "100%"
            this.danoRecebidoPlayer = 100
            this.sublifeMonster.width = "100%"
            this.danoRecebidoMonster = 100
            alert("VOCÊ DESISTIU DO JOGO")

        }


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
    padding: 0% 0px 15% 0px;
    border: 1px solid black;
    margin-left: -80%;
}

.sublifePlayer{
    background-color: green;
    padding: 0% 0px 7.4% 0px;; /* BUGZINHO AQUI CORRIGIR AMANHÃ */
    margin-bottom: 2%;
}

.lifeMonster{
    height: 5%;
    width: 250%;
    padding: 0% 0px 15% 0px;
    border: 1px solid black;
    margin-left: -80%;

}

.sublifeMonster{
    background-color: green;
    padding: 0% 0px 7.2% 0px;; /* BUGZINHO AQUI CORRIGIR AMANHÃ */
    margin-bottom: 2%;
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