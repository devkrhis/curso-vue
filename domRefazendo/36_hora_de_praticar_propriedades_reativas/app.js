new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: ({
        resultado(){
            if(this.valor == 37){
                return 'O valor e igual 37'
            } else {
                return 'O valor e diferente de 37'
            }
        }
    }),
    watch: {
        resultado(){
            setTimeout(() => {
                this.valor = 0;

            }, 3000)
        } 
    }
});