<template>
    <section>
        <div id="imagen">

        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['users'])
    },
    methods:{
        comprobar(){
            console.log(this.users)
        }
    }

}
</script>

<style>

</style>