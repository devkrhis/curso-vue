<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p> Nome do Usuário: <strong> {{ inverterNome() }} </strong></p>
    </div>
</template>

<script>
export default {
    // pode ser usado dessa forma: props: ['nomeDoProps'],
    props: { // pode ser usado como objeto, lembrando que o nome da propriedade tem que ser em maisculo String.
        // verificar o console porque ele vai dizer o que ele está esperando, pois ele vai checar o tipo: type
        nomeDoProps: {
            type: String,
            
            // required: true,--> Aqui estou obrigando o requerimento sendo true então lá no usuário principal tem que estar assim :nomeDoProps="nome" e
            // também tem que estar nomeDoProps: {} <- apontando para ele, pois se não vai dar erro.
            
            //default: function(){
            //    return Array(10).fill(0).join(',') // também pode ser gerado uma function para default
            //}
            
            default: 'Anônimo' // aqui caso não tenha nada lá no UsuárioPrincipal ele vai assumir esse nome
        }
    },

    methods: {
        inverterNome(){
            return this.nomeDoProps.split('').reverse().join('')
        }
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
