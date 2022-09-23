new Vue ({
    el: '#desafio',
    data: {
        widthHuman: '100%',
        lifeHuman: 100,
        widthMonster: '100%',
        lifeMonster: 100,
        hide: false,
        monsterDamage: 0,
        humanDamage: 0
    },
    methods: {
        attack(){
            //Aqui eu estou tirando a vida do HUMANO
            this.lifeHuman -= (Math.floor(Math.random() * 15 )) // monstro
            this.monsterDamage = (Math.floor(Math.random() * 15 )) // LOG QUE VAI MOSTRAR NA TELA
            console.log(this.lifeHuman)
            this.widthHuman = {width: this.lifeHuman +"%"}

            if(this.lifeHuman <= 0 ){
                this.widthHuman = {width: "0%"}
                alert("O Humano foi derrotado")
                this.hide = false
            } else if(this.lifeHuman > 70) {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "green"}
            } else if(this.lifeHuman <= 70 && this.lifeHuman >= 40) {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "yellow"}
            } else {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "red"}
            }

            //Aqui eu estou tirando a vida do MONSTRO
            this.lifeMonster -= (Math.floor(Math.random() * 10)) // humano
            console.log(this.lifeMonster)
            this.widthMonster = {width: this.lifeMonster +"%"}
            this.humanDamage = (Math.floor(Math.random() * 10)) // LOG QUE VAI MOSTRAR NA TELA

            if(this.lifeMonster <= 0 ){
                this.widthMonster = {width: "0%"}
                alert("O Monstro foi derrotado")
                this.hide = false
            } else if(this.lifeMonster > 70) {
                this.widthMonster = {width: this.lifeMonster + "%", backgroundColor: "green"}
            } else if(this.lifeMonster <= 70 && this.lifeMonster >= 40) {
                this.widthMonster = {width: this.lifeMonster + "%", backgroundColor: "yellow"}
            } else {
                this.widthMonster = {width: this.lifeMonster + "%", backgroundColor: "red"}
            }

        },
        specialAttack(){
            //Aqui eu estou tirando a vida do MONSTRO
            this.lifeMonster -= (Math.floor(Math.random() * 20)) // humano
            console.log(this.lifeMonster)
            this.widthMonster = {width: this.lifeMonster +"%"}

            if(this.lifeMonster <= 0 ){
                this.widthMonster = {width: "0%"}
                alert("O Monstro foi derrotado")
                this.hide = false
            } else if(this.lifeMonster > 70) {
                this.widthMonster = {width: this.lifeMonster + "%", backgroundColor: "green"}
            } else if(this.lifeMonster <= 70 && this.lifeMonster >= 40) {
                this.widthMonster = {width: this.lifeMonster + "%", backgroundColor: "yellow"}
            } else {
                this.widthMonster = {width: this.lifeMonster + "%", backgroundColor: "red"}
            } 


            //Aqui eu estou tirando a vida do HUMANO
            this.lifeHuman -= (Math.floor(Math.random() * 10 )) // monstro
            console.log(this.lifeHuman)
            this.widthHuman = {width: this.lifeHuman +"%"}

            if(this.lifeHuman <= 0 ){
                this.widthHuman = {width: "0%"}
                alert("O Humano foi derrotado")
                this.hide = false
            } else if(this.lifeHuman > 70) {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "green"}
            } else if(this.lifeHuman <= 70 && this.lifeHuman >= 40) {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "yellow"}
            } else {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "red"}
            }

        },
        heal(){
            this.lifeHuman += (Math.floor(Math.random() * 20)) // Recuperando a vida do humano
            console.log(this.lifeHuman)
            this.widthHuman = {width: this.lifeHuman + "%"}

            this.lifeMonster += (Math.floor(Math.random() * 10)) // Recuperando a vida do monstro
            console.log(this.lifeMonster)
            this.widthMonster = {width: this.lifeMonster + "%"}

            if(this.lifeHuman > 100){
                this.widthHuman = 100
                this.lifeHuman = 100
            }
            if (this.lifeMonster > 100){
                this.widthMonster = 100
                this.lifeMonster = 100
            }

        },
        restart(){
            this.widthMonster = 100
            this.lifeMonster = 100
            this.widthHuman = 100
            this.lifeHuman = 100
            this.hide = false
        }
    }
})