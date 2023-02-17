<template>
    <section>
        <div id="caja">
            <h1>Login</h1>
            <div>
                <label>Usuario</label>
                <input type="text" placeholder="User" v-model="$store.state.user">
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña" v-model="$store.state.password">
            </div>
            <h2 v-if="mensaje.length > 0">{{ mensaje }}</h2>
            <button @click="comprobar()">Acceder</button>
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            mensaje:''
        }
    },
    computed:{
        ...mapState(['users',"user","password"])
    },
    methods:{
        comprobar(){
            let encontrado = false
            // console.log(this.users)
            this.users.forEach(x=> {

                if(this.user == x.nombre && this.password == x.password){
                        encontrado = true
                        this.mensaje = ''
                        
                        if(this.user == "admin"){
                            this.$router.push({path:'/add'})
                        }else{
                            this.$router.push({path:'/movies'})
                        }
                }
            })

            if (encontrado==false){
                this.mensaje = "Usuario no encontrado"
            }
            this.$store.state.user = ""
            this.$store.state.password = ""
        }
    }

}
</script>
<style lang="sass" scoped>
*
    // border: 1px solid
    font-family: 'Nunito Sans', sans-serif
section
    background: #f7eee5
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    #caja
        background: #2b2a2c
        height: 60%
        width: 80%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-evenly
        h1
            color: #f7eee5
            font-size: 32px
            letter-spacing: 2px
            border-bottom: 1px solid
        div
            width: 80%
            height: 13%
            display: flex
            flex-direction: column
            justify-content: space-between
            label
                color: #f7eee5
                font-size: 18px

            input
                outline: none
                height: 35px
                padding-left: 1rem 
        button
            color: #f7eee5
            background: #b14b37
            color: #f7eee5
            padding: .5rem 1rem
            border: none
            letter-spacing: 2px
            font-size: 20px



</style>