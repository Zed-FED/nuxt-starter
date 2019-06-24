<template>
  <section class="">
    <div>
      <!-- <app-logo/> -->
      <Header />
    </div>

    <!-- Slider -->
    <no-ssr>
      <Slider />
    </no-ssr>
    <!-- Slider -->

    <!-- Columns -->
    <Columns />
    <!-- Columns Ends -->

    <Footer />


  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Slider from '~/components/Slider.vue'
  import Columns from '~/components/Columns.vue'
  
  export default {
    components: {
      AppLogo,
      Header,
      Footer,
      Slider,
      Columns
    },
    data () {
      return {
        title: 'Home'
      }
    },
    head () {
      return {
        title: this.title
      }
    }
  }
</script>



<style>

</style>

