<template>
  <section>
    <div id="user">
      <router-link to="/login">
        <i class="fa-solid fa-user"></i>
      </router-link>
    </div>
    <div id="centro">
      <router-link to="/login">
        <i class="fa-solid fa-video"></i>
      </router-link>
      <h1>4tumovies</h1>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeView'
}
</script>
<style lang="sass" scoped>
*
  // border: 1px solid
section
  background: #f7eee5
  height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  #user
    width: 100%
    height: 10%
    display: flex
    align-items: start
    justify-content: end
    padding: 2rem
    a
      text-decoration: none
      i
        font-size: 32px
        background: #b14b37
        border: 1px solid
        border-radius: 50%
        padding: 1rem
  #centro
    width: 100%
    height: 90%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    a
      margin-bottom: 2rem
      i
        font-size: 95px
        color: #2b2a2c
        border: 1px solid
        border-radius: 10px
        padding: .8rem
    h1
      font-size: 40px
      color: #e3a344
      letter-spacing: 2px



</style>
