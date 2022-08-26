new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: ({
        chamandoAlert(){
            console.log("passei aqui")
            alert("Clicou aparece o alerta")
        },
        modificadorDeEvento(event){
            this.valor = event.target.value   
        },
        modificandoComEntenr(event){
            this.valor = event.target.value
        }
    })
})