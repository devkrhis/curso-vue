new Vue({
    el: '#desafio',
    data: {
        SEU_NOME: 'Krhistopher',
        IDADE: '24',
        idadepor3: 24 * 3,
        linkImagem: 'https://i.pinimg.com/originals/92/f4/21/92f421fbaf188fc6452dc19aa9428095.jpg',
    },
    methods: {
        randomico(){
            this.aleatorio = Math.random()
            return this.aleatorio
        }
    }
})