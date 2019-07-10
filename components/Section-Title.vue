<script>
  import Heading from '~/components/Heading.vue'
  import Text from '~/components/Text.vue'
  export default {
    components: {
      Heading,
      Text
    }
  }
</script>

<template>
  <div class="section-title">
    <b-container class="text-center">
      <span class="icon-circle">
        <img src="~/assets/images/icon-circle.svg" alt="" />
      </span>
      <Heading :level="3">About Me</Heading>
      <p>I have more than 7 years of experience in web design and development.
         I love Music, Delicious food, Travel and Coding.</p>
      <!-- <Text :content="dfgdgdfg"></Text>    -->
    </b-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
