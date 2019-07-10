<script>
import NoSSR from 'vue-no-ssr'
import { VueperSlides, VueperSlide } from 'vueperslides'
import '~/node_modules/vueperslides/dist/vueperslides.css'

import Heading from '~/components/Heading.vue'
import SectionHeading from '~/components/SectionHeading'

export default {
    components: {
      Heading,
      VueperSlides,
      VueperSlide,
      SectionHeading,
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
  <SectionHeading heading="Testimonials" content="This component is for viewing purpose"/>
  <b-container>
    <vueper-slides :autoplay="false" :bullets="false" class="no-shadow">
      <vueper-slide v-for="items in slides" :key="items.id">
        <!-- <img :src="`images/${items.clientImage}`" alt=""/> -->
        <div slot="slideContent">
          <div slot="clientImg" class="mb-2">
            <img :src="`images/${items.clientImage}`" alt="" class="client-img" />
          </div>
          <Heading :level="4" slot="slideTitle">
            {{ items.title }}
          </Heading>
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
