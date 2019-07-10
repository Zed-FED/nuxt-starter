<script>
import Heading from '~/components/Heading.vue'

  export default {
    props: ['heading', 'content'],
    components: {
      Heading
    }
  }
</script>

<template>
  <b-container class="text-center">
      <span><img src="~/assets/images/icon.svg" alt="" /></span>
      <Heading :level="3">{{ heading }}</Heading>
      <p>{{ content }}</p>
  </b-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
