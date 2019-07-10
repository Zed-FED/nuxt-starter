<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
    components: {
        AppLogo
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

    <header class="py-3">
        <b-container>
            <b-row class="align-items-center">
                <!-- Logo Container -->
                <b-col cols="12" sm="4" class="logo">
                  <app-logo/>
                </b-col>
                <!-- Logo Container Ends -->

                <!-- Navigation -->
                <b-col cols="12" sm="8">
                    <!-- <ul class="nav justify-content-end">
                        <li v-for="(items, index) in menu" :key="index" class="nav-item">
                            <nuxt-link v-bind:to="items.menuLink" class="nav-link">{{ items.menuItem }}</nuxt-link>
                        </li>
                    </ul> -->
                  <b-nav class="justify-content-end site-nav">
                    <b-nav-item v-for="(items, index) in menu" :key="index" v-bind:to="items.menuLink">
                      {{ items.menuItem }}
                    </b-nav-item>
                  </b-nav>
                </b-col>
                <!-- Navigation Ends -->
            </b-row>
        </b-container>
    </header>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    background-color: $white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    box-shadow: 0px 0px 20px 10px rgba($black, 0.15);
    a {
      transition: 0.5 ease-in-out;
      color: $color-text;
      &:hover, &.nuxt-link-exact-active {
        color: $primary-color;
      }
    }
  }
</style>