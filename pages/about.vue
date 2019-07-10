<template>
    <div>
      <div class="container">
        <h1 class="title">{{title}}</h1>
        <h3 class="subtitle">About Nuxt.js project</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, recusandae. Error deleniti molestiae perspiciatis 
          voluptatibus, quasi incidunt atque maiores aperiam dolorem obcaecati? Consequuntur quos exercitationem enim rem 
          cupiditate expedita repudiandae!</p>
      </div>
    </div>
</template>

<script>

export default {
  components: {
    
  },
  data () {
    return {
      title: 'About'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>


<style scoped lang="scss">

</style>

