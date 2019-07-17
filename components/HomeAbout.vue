<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Button/Button.vue'
import SectionHeading from '~/components/SectionHeading'
  export default {
    components: {
      Heading,
      Btn,
      SectionHeading
    },
    data: () => ({
    homeabout: [
        {
          image: "img-home-about.jpg",
          heading: 'Heading 1',
          desc1: 'Obcaecati harum modi cum beatae reiciendis unde aut ipsam rerum officia magni sit quasi perspiciatis',
          desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          image: "img-home-about.jpg",
          heading: 'Heading 2',
          desc1: 'Obcaecati harum modi cum beatae reiciendis unde aut ipsam rerum officia magni sit quasi perspiciatis',
          desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        }
      ]
    })
  }
</script>

<template>
  <section class="my-5">
    <SectionHeading heading="About Me" content="I have more than 7 years of experience in web design and development.
   I love Music, Delicious food, Travel and Coding."/>

  <b-container class="homeabout">
      <!-- <b-row class="align-items-center py-5">
          <b-col cols="12" sm="6">
              <Heading :level="3">I'm Zed <br/>UI/UX Designer &amp; Developer <br/>from India</Heading>
              <p>Cheesy feet airedale brie. Squirty cheese taleggio monterey jack cheesy feet fromage cow cut the cheese bocconcini.</p>
              <p> Gouda cheese triangles manchego bocconcini fondue boursin manchego say cheese. Cheese strings cheeseburger.</p>
              <Btn to="/about">View More</Btn>
          </b-col>
          <b-col cols="12" sm="6">
              <img src="~/assets/images/man.jpg" alt="Zed-FED" />
          </b-col>
      </b-row> -->

      <b-row class="align-items-center py-5" v-for="(items, index) in homeabout" :key="index">
        <b-col cols="12" sm="6">
          <Heading :level="3">{{ items.heading }}</Heading>
          <p>{{ items.desc1 }}</p>
          <p>{{ items.desc2 }}</p>
          <Btn to="/about">View More</Btn>
        </b-col>
        <b-col cols="12" sm="6">
          <div class="side-image-wrapper">
            <img :src="`images/${items.image}`" class="" alt="" />
          </div>
        </b-col>
      </b-row>
  </b-container>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.homeabout {
  .row:nth-child(even) {
    flex-direction: row-reverse;
  }
}
.side-image-wrapper {
    position: relative;
    display: block;
    margin: 0 auto;
    max-width: 70%;
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 69% 37% 50% 50%/70% 68% 32% 30%;
      background-color: #f5f5f5;
      top: 10%;
      left: 10%;
      z-index: -1;
      max-width: 500px;
    }
    img {
      border-radius: 69% 37% 50% 50%/70% 68% 32% 30%;
      height: 500px;
      object-fit: cover;
      width: auto;
      margin: 0 auto;
      display: block;

      @media screen and (max-width: 767px) {
        height: 380px;
      }
    }
}
</style>
