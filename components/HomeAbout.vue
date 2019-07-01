<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Button/Button.vue'
  export default {
    components: {
      Heading,
      Btn
    }
  }
</script>

<template>
  <b-container>
      <b-row class="align-items-center py-5">
          <b-col cols="12" sm="6">
              <Heading :level="3">I'm Zed <br/>UI/UX Designer &amp; Developer <br/>from India</Heading>
              <p>Cheesy feet airedale brie. Squirty cheese taleggio monterey jack cheesy feet fromage cow cut the cheese bocconcini.</p>
              <p> Gouda cheese triangles manchego bocconcini fondue boursin manchego say cheese. Cheese strings cheeseburger.</p>
              <Btn to="/about">View More</Btn>
          </b-col>
          <b-col cols="12" sm="6">
              <img src="~/assets/images/man.jpg" alt="Zed-FED" />
          </b-col>
      </b-row>
  </b-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>