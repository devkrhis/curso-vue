<template>
    <div>
        <ul>
            <li :class="returnClass">{{ agents.name }}</li>
            <li :class="returnClass">{{ agents.name }}</li>
        </ul>
        <div :class="returnClass" style="width:100px; height: 100px; border: 1px solid black">Krrrrr</div>

        <input type="button" value="Clique aqui" @click="activeAgent()"/>
        <hr>

        <pre>{{agents}}</pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            agents: {
                name: "Krhis",
                active: false,
            }
        }
    },
    computed:{
        returnClass(){
            if(this.agents.active == true){
                return {'active': true}
            }else if(this.agents.active == false) {
                return {'deactive': true}
            }
        }
    },
    methods: {
        activeAgent() {
            this.agents.active = !this.agents.active
        }
    }
}
</script>

<style scoped>
.deactive {
    background-color: lightpink;
}

.active {
    background-color: lightgreen;
}
</style>
