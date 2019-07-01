<script>
import NoSSR from 'vue-no-ssr'
import { VueperSlides, VueperSlide } from 'vueperslides'
import '~/node_modules/vueperslides/dist/vueperslides.css'

import Heading from '~/components/Heading.vue'

export default {
    components: {
      Heading,
      VueperSlides, 
      VueperSlide,
      'no-ssr': NoSSR
    },
    data: () => ({
    slides: [
      {
        id: 1,
        title: 'Slide <b style="font-size: 1.3em;color: yellow">John Doe</b>',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        clientImage : 'img-testimonial.png'
      },
      {
        id: 2,
        title: 'Slide <b style="font-size: 1.3em;color: red">Peter Parker</b>',
        content: 'Iure, amet unde? Quasi, ratione voluptas quae dolor ipsum blanditiis possimus quo',
        clientImage : 'img-testimonial.png'
      },
      {
        id: 3,
        title: 'Slide <b style="font-size: 1.3em;color: purple">Jenny Doe</b>',
        content: 'illo provident quia incidunt esse perspiciatis vero odio magnam aspernatur.',
        clientImage : 'img-testimonial.png'
      }
    ]
  })
}

</script>

<template>
<div id="testimonials" class="testimonials">
  <b-container>
    <Heading :level="3" class="text-center">Testimonials</Heading>
    <vueper-slides autoplay :bullets="false" class="no-shadow">
      <vueper-slide v-for="items in slides" :key="items.id" :title="items.title" :content="items.content">
        <img :src="`images/${items.clientImage}`" alt=""/>
      </vueper-slide>
    </vueper-slides>
  </b-container>
</div>
</template>

<style scoped lang="scss">
  
</style>
