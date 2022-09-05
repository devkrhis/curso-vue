new Vue({
	el: '#desafio',
	data: {
		destaque: false,
		encolher: false,
		colorRed: true,
		girar: true,
		applyClass: '',
		applyOption: '',
		classeCSS: 'destaque',
		cor: 'red',
		largura: '50%',
		preenchimento: '0%'

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				if(this.classeCSS == 'destaque'){
					return this.classeCSS = 'encolher'
				} else {
					return this.classeCSS = 'destaque'
				}
			}, 2000)
			

		},
		iniciarProgresso() {
			setInterval(() => {
				if(this.preenchimento < '50%'){
					return this.largura + '10px' 
				}

			}, 2000)

		}
	}
})
