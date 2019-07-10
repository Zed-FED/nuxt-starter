<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
// import '~/node_modules/bootstrap/scss/bootstrap.scss'
// import '~/assets/scss/index.scss'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>

</style>

