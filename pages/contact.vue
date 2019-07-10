<template>
    <div>
      <div class="container">
        <h1 class="title">Contact</h1>
        <h3 class="subtitle">Contact Nuxt.js project</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi corporis omnis, minima perspiciatis 
          corrupti. Ducimus, architecto quasi illo dolor velit perspiciatis consectetur eaque perferendis dicta repudiandae 
          ut optio impedit!</p>
          <Form />
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);

import Form from '~/components/Form'

export default {
  components: {
    Form
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

