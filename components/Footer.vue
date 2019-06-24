<script>

export default {
    components: {
        
    },
    data: () => ({
    menu: [
      {
        id: 1,
        menuItem: 'Home',
        menuLink: '/'
      },
      {
        id: 2,
        menuItem: 'About',
        menuLink: '/about'
      },
      {
        id: 3,
        menuItem: 'Contact',
        menuLink: '/contact'
      }
    ]
  })
}



</script>

<template>
<div>
    <header class="py-3">
        <div class="container">
            <div class="row align-items-center">
                <!-- Logo Container -->
                <div class="logo col-sm-4">
                    &copy;2019
                </div>
                <!-- Logo Container Ends -->

                <!-- Navigation -->
                <div class="col-sm-8">
                    <ul class="nav justify-content-center">
                        <li v-for="(items, index) in menu" :key="index" class="nav-item">
                            <nuxt-link v-bind:to="items.menuLink" class="nav-link">{{ items.menuItem }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <!-- Navigation Ends -->
            </div>
        </div>
    </header>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>