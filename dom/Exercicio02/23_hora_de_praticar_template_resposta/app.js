new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        exibirAlerta(event){
            console.log(event)
            alert("Exibindo o Alerta")
        },
        pegandoValor(valores){
            this.valor = valores;
            console.log(this.valor)

        },
        RecebeValorEnter(valores){
            this.valor2 = valores;
            console.log(this.valor2)

        }

    }
})