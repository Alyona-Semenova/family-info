
<template>
  <div id="app">
    <!-- <header class="header"> 
      <img src="./assets/logo.svg" alt="logo" class="header__logo">

      <nav>
        <router-link to="/form">Форма</router-link>
        <router-link to="/preview">Превью</router-link>
      </nav>
    </header> -->

    <HeaderComponent/>

    <router-view/>
  </div>
</template>

<script> 
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rufina:wght@400;700&display=swap');

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}

#app {
  font-family: 'Montserrat',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%
}


</style>
