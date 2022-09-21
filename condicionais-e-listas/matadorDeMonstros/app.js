new Vue ({
    el: '#desafio',
    data: {
        width: '100%',
    },
    methods: {
        attack(){
            let valor = 100
            valor -= (Math.floor(Math.random() * 20 )) // monstro
            console.log(valor)
            valor -= (Math.floor(Math.random() * 10)) // humano
            console.log(valor)
            this.width = `${valor}%`
            
            // valueAll = 0;
        },
        specialAttack(){
            console.log(Math.floor(Math.random() * 10)) // monstro
            console.log(Math.floor(Math.random() * 20 )) // humano
        },
        heal(){
            console.log(Math.floor(Math.random() * 10)) // monstro
            console.log(Math.floor(Math.random() * 10 )) // humano
        },
        restart(){

        }
    }
})