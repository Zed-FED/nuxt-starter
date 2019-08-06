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
    ],
    show: false,
    isActive: false
  }),
  methods: {
    navToggle: function(e){
      // this.show = !this.show;
      this.isActive = false;
    }
  },
  watch:{
    '$route': 'navToggle'
  }
}



</script>

<template>

    <header>
        <b-container fluid>
          <b-row class="justify-content-between align-items-center">

            <b-col cols="auto">
              <app-logo/>
            </b-col>

            <!-- Icons -->
            <b-list-group horizontal class="social ml-auto mr-md-5">
              <b-list-group-item><a href="#"><font-awesome-icon size="lg" :icon="['fab', 'linkedin']"/></a></b-list-group-item>
              <b-list-group-item><a href="#"><font-awesome-icon size="lg" :icon="['fab', 'github']"/></a></b-list-group-item>
              <b-list-group-item><a href="#"><font-awesome-icon size="lg" :icon="['fab', 'stack-overflow']"/></a></b-list-group-item>
            </b-list-group>
            <!-- Icons End -->

            <b-col cols="auto">
            <button class="btn menu-toggle"
              @click="isActive = !isActive"
              v-bind:class="{ active: isActive }"
            >
              <span class="bar bar1"></span>
              <span class="bar bar2"></span>
              <span class="bar bar3"></span>
              <span class="bar bar4"></span>
            </button>

              <b-nav class="site-nav" v-bind:class="{ active: isActive }">
                <b-nav-item v-for="(items, index) in menu" :key="index" v-bind:to="items.menuLink">
                  {{ items.menuItem }}
                    </b-nav-item>
              </b-nav>
            </b-col>
          </b-row>
        </b-container>
    </header>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    background-color: $secondary-color;
    position: sticky;
    padding: 25px 50px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    box-shadow: 0px 0px 20px 10px rgba($black, 0.15);
    @media screen and (max-width: 767px) {
      padding-left: 0;
      padding-right: 0;
    }
    .nav-item:not(:last-child) {
        a {
          padding-right: 20px;
        }
      }
    a, .navbar-light .navbar-nav .nav-link {
      transition: 0.5 ease-in-out;
      color: $white;
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

    .social {
      a {
        padding-left: 0;
        margin-left: 20px;
        margin-right: 20px;
        @media screen and (max-width: 767px) {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
      .list-group-item {
        background-color: transparent;
        border-color: transparent;
        padding: 0;

        @media screen and (max-width: 767px) {
          padding: 2px;
        }
      }
    }
  }
  .site-nav {
      position: fixed;
      bottom: 0;
      top: 0;
      right: 0;
      background-color: $secondary-color;
      width: 250px;
      transform: translateX(250px);
      transition: 0.5s;
      padding-top: 100px;
      z-index: -1;
      flex-direction: column;
      transition: 0.5s;

      &.active {
        transform: translateX(0px);
      }
    }

    .menu-toggle {
      position: relative;
      min-width: 30px;
      height: 30px;
      position: relative;
      padding: 0;

      &:hover {
        background-color: transparent;
      }

    .bar {
      padding: 0;
      width: 30px;
      height: 4px;
      background-color: $white;
      display: block;
      border-radius: 4px;
      transition: all 0.4s ease-in-out;
      position: absolute;
      left: 0;
      right: 0;
    }

    .bar1 { top: 0; }
    .bar2, .bar3 { top: 12.5px; }
    .bar3 { right: 0; }
    .bar4 { bottom: 0; }

    &.active {
      .bar1{
        transform: translateX(40px);
        background-color: transparent;
      }
      .bar2{
        transform: rotate(45deg);
      }
      .bar3{
        transform: rotate(-45deg);
      }
      .bar4{
        transform: translateX(-40px);
        background-color: transparent;
      }
    }

    }
</style>