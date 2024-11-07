<template>
      <header class="header"> 
        <img src="../assets/logo.svg" alt="logo" class="header__logo">
  
        <nav>
          <router-link to="/form">Форма</router-link>
          <router-link to="/preview">Превью</router-link>
        </nav>
      </header>
</template>

<script>

export default {
    name: "HeaderComponent",
}

</script>


<style lang="scss" scoped>
.header {
    width: 100%;
    height: 76px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E7E7E7;
   
    &__logo {
     position: absolute;
     left: 92px;
    }
   } 
   
   nav {
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 24px;
   
     a {
       color: #8D8D8D;
       text-decoration: none;
     }
   }
   </style>
