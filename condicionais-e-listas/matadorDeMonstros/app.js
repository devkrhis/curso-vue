new Vue ({
    el: '#desafio',
    data: {
        widthHuman: '100%',
        lifeHuman: 100,
        widthMonster: '100%',
        lifeMonster: 100,
        hide: false,
        monsterDamage: '',
        humanDamage: 0,
        testeDamage: 0
    },
    methods: {
        attack(){
            //Aqui eu estou tirando a vida do HUMANO
            this.lifeHuman -= (Math.floor(Math.random() * 15 )) // monstro

            this.monsterDamage = (Math.floor(Math.random() * 15 )) // LOG QUE VAI MOSTRAR NA TELA
            const node1 = document.createElement("p");
            const node2 = document.createElement("p")
            node1.classList = "allLogMonster"
            node2.classList = "allLogHuman"
            const textnode1 = document.createTextNode("O DANO DO MOSTRO " + this.monsterDamage)
            const textnode2 = document.createTextNode("O DANO DO HUMANO " + this.humanDamage)
            node1.appendChild(textnode1)
            node2.appendChild(textnode2)
            document.getElementById("consoleLogAll").appendChild(node1);
            document.getElementById("consoleLogAll").appendChild(node2);

            console.log(this.lifeHuman)
            this.widthHuman = {width: this.lifeHuman +"%"}

            if(this.lifeHuman <= 0 ){
                this.widthHuman = {width: this.lifeHuman = "0"}
                this.hide = false
                setTimeout(() => {
                    alert("O Jogador Foi DERROTADO!!")
                }, 500)
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
                this.widthMonster = {width: this.lifeMonster = "0"}
                this.hide = false
                setTimeout(() => {
                    alert("O Jogador VENCEU!!")
                }, 500)
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
                this.widthMonster = {width: this.lifeMonster = "0"}
                this.hide = false
                setTimeout(() => {
                    alert("O Jogador VENCEU!!")
                }, 500)
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
                this.widthHuman = {width: this.lifeMonster = "0"}
                this.hide = false
                setTimeout(() => {
                    alert("O Jogador foi DERROTADO!!")
                }, 500)
            } else if(this.lifeHuman > 70) {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "green"}
            } else if(this.lifeHuman <= 70 && this.lifeHuman >= 40) {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "yellow"}
            } else {
                this.widthHuman = {width: this.lifeHuman + "%", backgroundColor: "red"}
            }

            const node1 = document.createElement("p");
            const node2 = document.createElement("p")
            node1.classList = "allLogMonster"
            node2.classList = "allLogHuman"
            const textnode1 = document.createTextNode("O DANO DO MOSTRO " + this.monsterDamage)
            const textnode2 = document.createTextNode("O DANO DO HUMANO " + this.humanDamage)
            node1.appendChild(textnode1)
            node2.appendChild(textnode2)
            document.getElementById("consoleLogAll").appendChild(node1);
            document.getElementById("consoleLogAll").appendChild(node2);

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

            const node1 = document.createElement("p");
            const node2 = document.createElement("p")
            node1.classList = "allLogMonster"
            node2.classList = "allLogHuman"
            const textnode1 = document.createTextNode("O MONSTRO SE CUROU " + this.monsterDamage)
            const textnode2 = document.createTextNode("O HUMANO SE CUROU " + this.humanDamage)
            node1.appendChild(textnode1)
            node2.appendChild(textnode2)
            document.getElementById("consoleLogAll").appendChild(node1);
            document.getElementById("consoleLogAll").appendChild(node2);

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