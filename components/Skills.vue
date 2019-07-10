<script>
import Heading from '~/components/Heading.vue'
import SectionHeading from '~/components/SectionHeading'
export default {
    components: {
      Heading,
      SectionHeading
    },
    data: () => ({
    logos: [
      {
        image: "logo-vue.png",
        columnHeading: 'Vue 2'
      },
      {
        image: "logo-nuxt.png",
        columnHeading: 'Nuxt 2.8.X'
      },
      {
        image: "logo-webpack.png",
        columnHeading: 'Webpack'
      },
      {
        image: "logo-bootstrap.png",
        columnHeading: 'Bootstrap 4'
      }
    ]
  })
}



</script>

<template>
  <section>
    <SectionHeading heading="Skills" content="Below are the technologies i am using to build this website."/>
    <b-container>
        <b-row class="py-5 align-items-center justify-content-center">
            <b-col cols="auto" class="text-center" v-for="(items, index) in logos" :key="index">
                <img :src="`images/${items.image}`" class="tech-icon" alt=""/>
                <Heading :level="4" class="my-3">{{ items.columnHeading }}</Heading>
            </b-col>
        </b-row>
        <!-- <Btn to="/about">I'm a Button</Btn> -->
    </b-container>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tech-icon {
    max-height: 60px;
  }
</style>
