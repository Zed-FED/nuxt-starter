<template>
  <section class="">
    
    
     
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

    <!-- Skills -->
    <Skills />
    <!-- Skills -->

    <GlobalParallax />

    <!-- <no-ssr>
      <HomeGallery />
    </no-ssr> -->

    <no-ssr>
      <Testimonials />
    </no-ssr>

    


  </section>
</template>

<script>
  import Hero from '~/components/Hero.vue'
  // import Slider from '~/components/Slider.vue'
  import Columns from '~/components/Columns.vue'
  import HomeAbout from '~/components/HomeAbout.vue'
  import Testimonials from '~/components/HomeTestimonial.vue'
  import Skills from '~/components/Skills.vue'
  import GlobalParallax from '~/components/GlobalParallax.vue'
  import HomeGallery from '~/components/HomeGallery.vue'
  import NoSSR from 'vue-no-ssr'
  
  export default {
    components: {
      Hero,
      // Slider,
      Columns,
      HomeAbout,
      Testimonials,
      // HomeContent,
      Skills,
      GlobalParallax,
      HomeGallery,
      'no-ssr': NoSSR
      
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

