<template>
  <section class="">
    
    <Header />
     
    <no-ssr>
      <Hero />
    </no-ssr>

    <!-- Slider -->
    <!-- <client-only>
      <Slider />
    </client-only> -->
    <!-- Slider -->

    <HomeAbout />

    <!-- Columns -->
    <Columns />
    <!-- Columns Ends -->

    <no-ssr>
      <Testimonials />
    </no-ssr>

    <Footer />


  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import Header from '~/components/Header.vue'
  import Hero from '~/components/Hero.vue'
  import Footer from '~/components/Footer.vue'
  // import Slider from '~/components/Slider.vue'
  import Columns from '~/components/Columns.vue'
  import HomeAbout from '~/components/HomeAbout.vue'
  import Testimonials from '~/components/HomeTestimonial.vue'
  
  export default {
    components: {
      AppLogo,
      Header,
      Hero,
      Footer,
      // Slider,
      Columns,
      HomeAbout,
      Testimonials
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

