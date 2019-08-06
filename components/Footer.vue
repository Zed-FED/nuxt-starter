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
<div>
    <footer class="py-5 site-footer">
        <div class="container">
            <div class="row align-items-center justify-content-center text-center">
                <!-- Logo Container -->
                <div class="logo">
                    <app-logo/>
                </div>
                <!-- Logo Container Ends -->

                <!-- Navigation -->
                <div class="col-12 my-3">
                    <ul class="nav justify-content-center">
                        <li v-for="(items, index) in menu" :key="index" class="nav-item">
                            <nuxt-link v-bind:to="items.menuLink" class="nav-link">{{ items.menuItem }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <!-- Navigation Ends -->

                <div class="col-12">
                  © 2019 Zed-FED, All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.site-footer {
  background-color: $secondary-color;
  color: $white; 
  .nav {
    a {
      color: $white;
      &.nuxt-link-exact-active {
        color: $primary-color;
      }
    }
  }
}
</style>