<script>
import NoSSR from 'vue-no-ssr'
import { VueperSlides, VueperSlide } from 'vueperslides'
import '~/node_modules/vueperslides/dist/vueperslides.css'

export default {
    components: {
      VueperSlides, 
      VueperSlide,
      'no-ssr': NoSSR
    },
    data: () => ({
    slides: [
      {
        id: 1,
        title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
        content: 'Slide content 1.',
        image: 'banner-1.jpg'
      },
      {
        id: 2,
        title: 'Slide <b style="font-size: 1.3em;color: red">#2</b>',
        content: 'Slide content 2.',
        image: 'banner-2.jpg'
      },
      {
        id: 3,
        title: 'Slide <b style="font-size: 1.3em;color: purple">#3</b>',
        content: 'Slide content 3.',
        image: 'banner-3.jpg'
      }
    ]
  })
}

</script>

<template>
<div id="slider">
  <vueper-slides fade autoplay>
    <vueper-slide v-for="items in slides" :key="items.id" :title="items.title" :content="items.content" :image="'/images/' + items.image"></vueper-slide>
  </vueper-slides>
</div>
</template>

