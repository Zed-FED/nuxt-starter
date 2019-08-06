<template>
  <div class="logo">
    <!-- <div class="Triangle Triangle--two"/>
    <div class="Triangle Triangle--one"/>
    <div class="Triangle Triangle--three"/>
    <div class="Triangle Triangle--four"/> -->
    <nuxt-link to="/"><img src="~/assets/images/logo.svg"></nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .logo {
    img {
      max-width: 130px;
    }
  }
}
</style>


