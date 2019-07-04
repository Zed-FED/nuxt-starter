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
        title: 'Peter Paul',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        clientImage : 'img-testimonial.png'
      },
      {
        id: 2,
        title: 'John Doe',
        content: 'Iure, amet unde? Quasi, ratione voluptas quae dolor ipsum blanditiis possimus quo',
        clientImage : 'img-testimonial.png'
      },
      {
        id: 3,
        title: 'Jenny Doe',
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
    <vueper-slides :autoplay="false" :bullets="false" class="no-shadow">
      <vueper-slide v-for="items in slides" :key="items.id">
        <!-- <img :src="`images/${items.clientImage}`" alt=""/> -->
        <div slot="slideContent">
          <div slot="clientImg">
            <img :src="`images/${items.clientImage}`" alt="" class="client-img" />
          </div>
          <div slot="slideTitle">
            {{ items.title }}
          </div>
          <div slot="slideText">
            {{ items.content }}
          </div>
        </div>
      </vueper-slide>
    </vueper-slides>
  </b-container>
</div>
</template>

<style scoped lang="scss">
  .client-img {
    max-width: 100px;
    border-radius: 100%; 
  }
</style>
