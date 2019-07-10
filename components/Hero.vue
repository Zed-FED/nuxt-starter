<template>
<div class="position-relative">
  <parallax>
    <img src="~/assets/images/hero-bg.jpg" alt="Zed-FED" />
  </parallax>
  <div class="hero-text text-center">
    <Heading :level="3">Hey, I'm Zed</Heading>
    <Heading :level="2">Web Dev</Heading>
    <Heading :level="4">I am a senior Web Developer and a Music Lover. 
I love to code, travel, music &amp; foods.</Heading>
  </div>
</div>
</template>

<script>
  import Parallax from 'vue-parallaxy'
  import Heading from '~/components/Heading.vue'
  export default {
    components: {
      Parallax,
      Heading
    }
  }
</script>

<style scoped lang="scss">
.Masthead {
  &:after {
    content: "";
    background: rgba($black, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
}
.hero-text {
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  z-index: 2;
  color: $white;
  max-width: 510px;
  margin: auto;
   h1, h2, h3, h4, h5, h6, p {
     color: $white;
   }
   h2 {
     position: relative;
     font-size: $font-size-xxx-large;
     &:before, &:after {
       content: "";
       position: absolute;
       width: 100px;
       height: 10px;
       background-color: $white;
       top: 50%;
     }
     &:before {
       left: 0;
     }
     &:after {
       right: 0;
     }
   }
}
</style>
