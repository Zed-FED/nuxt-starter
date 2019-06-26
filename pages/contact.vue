<template>
    <div>
      <!-- <app-logo/> -->
      <Header />  
      
      <div class="container">
        <h1 class="title">Contact</h1>
        <h3 class="subtitle">Contact Nuxt.js project</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi corporis omnis, minima perspiciatis 
          corrupti. Ducimus, architecto quasi illo dolor velit perspiciatis consectetur eaque perferendis dicta repudiandae 
          ut optio impedit!</p>
          <Form />
      </div>

      <Footer />
    </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);


import AppLogo from '~/components/AppLogo.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Form from '~/components/Form'

export default {
  components: {
    AppLogo,
    Header,
    Form,
    Footer
  },
  data () {
    return {
      title: 'Contact'
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

