new Vue({
	el: '#desafio',
	data: {
		aplicarDestaque: 'destaque',
		padraoNovo: 'padrao',
		girandinho: true,
		cor: 'green',
		largura: 10,
		classe1: 'destaque'

	},
	methods: {
		iniciarEfeito() {
			setInterval(() =>{
				this.classe1 = this.classe1 =='destaque' ? 'encolher' : 'destaque'
			})
			
		},
		iniciarProgresso() {
				setInterval(() => {
					console.log(this.largura)
					this.largura++
				}, 5000)
			}
	}
})
