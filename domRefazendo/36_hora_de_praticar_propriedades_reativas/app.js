new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    methods: ({
        resultado(){
            if(this.valor == 37){
                return 'O valor e igual 37'
            } else {
                return 'O valor e diferente de 37'
            }
        }
    }),
    watch: {
        valor(novo, antigo){
            console.log(novo, antigo)
            setTimeout(() => {
                this.valor = 0;

            }, 3000)
        } 
    }
});