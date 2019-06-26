<template>
    <div>
      <!-- <app-logo/> -->
      <Header />  
      
      <div class="container">
        <h1 class="title">{{title}}</h1>
        <h3 class="subtitle">About Nuxt.js project</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, recusandae. Error deleniti molestiae perspiciatis 
          voluptatibus, quasi incidunt atque maiores aperiam dolorem obcaecati? Consequuntur quos exercitationem enim rem 
          cupiditate expedita repudiandae!</p>
      </div>

      <Footer />
    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    AppLogo,
    Header,
    Footer
  },
  data () {
    return {
      title: 'About'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>


<style scoped lang="scss">

</style>

