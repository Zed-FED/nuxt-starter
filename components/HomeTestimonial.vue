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
      },
      {
        id: 4,
        title: 'Peter Paul',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        clientImage : 'img-testimonial.png'
      },
      {
        id: 5,
        title: 'John Doe',
        content: 'Iure, amet unde? Quasi, ratione voluptas quae dolor ipsum blanditiis possimus quo',
        clientImage : 'img-testimonial.png'
      },
      {
        id: 6,
        title: 'Jenny Doe',
        content: 'illo provident quia incidunt esse perspiciatis vero odio magnam aspernatur.',
        clientImage : 'img-testimonial.png'
      }
    ],
    breakpoints: {
    
    900: {
      slideRatio: 1 / 3
    },
    600: {
      slideRatio: 1 ,
      visibleSlides: 1
    }
  },
  })
}

</script>

<template>
<div id="testimonials" class="testimonials bg-light py-5">
  <SectionHeading heading="Testimonials" content="This component is for viewing purpose"/>
  <b-container>
    <vueper-slides :autoplay="false" :bullets="false"  :dragging-distance="70" :slide-ratio="1/4" :visible-slides="3" :breakpoints="breakpoints" class="no-shadow">
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
  .vueperslides--fixed-height {
    height: 250px;
  }
  .testimonials {
    .vueperslide {
      padding: 20px;
      transition: 0.5s;
      transform: scale(0.85);
      box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
      border-radius: 5px;
      background-color: $white;
      .vueperslide__content-wrapper {
        border-radius: 5px;
        box-shadow: 0px  0px 20px rgba($black, 0.5);
        background-color: $white;
      }

      &.vueperslide--active {
        transform: scale(0.95);
      }
    }
  }
</style>
