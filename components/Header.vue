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

    <header>
        <b-container>
          <!-- Logo Container -->
          <b-navbar toggleable="lg" type="light"  variant="light" class="justify-content-between">
            <b-navbar-brand><app-logo/></b-navbar-brand>
              <!-- Navigation -->
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" class="justify-content-end site-nav" is-nav>
                <b-navbar-nav>
                  <b-nav-item v-for="(items, index) in menu" :key="index" v-bind:to="items.menuLink">
                {{ items.menuItem }}
              </b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
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
    .nav-item:not(:last-child) {
        a {
          padding-right: 20px;
        }
      }
    a, .navbar-light .navbar-nav .nav-link {
      transition: 0.5 ease-in-out;
      color: $color-text;
      padding-left: 20px;
      &:hover, &.nuxt-link-exact-active {
        color: $primary-color;
      }
    }
    .navbar {
      padding-left: 0;
      padding-right: 0;

      &.bg-light {
        background-color: transparent !important;
      }
    }
  }
</style>