<script>
import Heading from '~/components/Heading.vue'
import SectionHeading from '~/components/SectionHeading'
import ProgressBar from 'vue-simple-progress'
export default {
    components: {
      Heading,
      SectionHeading,
      ProgressBar
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
  <section class="py-5 bg-light">
    <SectionHeading heading="Skills" content="Below are the technologies i am using to build this website."/>
    <b-container>
        <b-row class="py-5 align-items-center justify-content-center tech-highlighter">
            <b-col cols="auto" class="text-center" v-for="(items, index) in logos" :key="index">
                <img :src="`images/${items.image}`" class="tech-icon" alt=""/>
                <Heading :level="4" class="my-3">{{ items.columnHeading }}</Heading>
            </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6" class="my-3">
            <Heading :level="4">UI/UX</Heading>
            <progress-bar bar-color="#2196f3" size="large" val="80" text="80" text-position="bottom"></progress-bar>
          </b-col>
          <b-col cols="12" md="6" class="my-3">
            <Heading :level="4">HTML5</Heading>
            <progress-bar bar-color="#2196f3" size="large" val="80" text="80" text-position="bottom"></progress-bar>
          </b-col>
          <b-col cols="12" md="6" class="my-3">
            <Heading :level="4">CSS3</Heading>
            <progress-bar bar-color="#2196f3" size="large" val="80" text="80" text-position="bottom"></progress-bar>
          </b-col>
          <b-col cols="12" md="6" class="my-3">
            <Heading :level="4">Responsive</Heading>
            <progress-bar bar-color="#2196f3" size="large" val="80" text="80" text-position="bottom"></progress-bar>
          </b-col>
        </b-row>
        <!-- <Btn to="/about">I'm a Button</Btn> -->
    </b-container>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tech-highlighter {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .tech-icon {
    max-height: 60px;
    
  }
</style>
