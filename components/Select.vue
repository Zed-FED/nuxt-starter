<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
// import VeeValidate from 'vee-validate'

import '~/node_modules/material-icons/iconfont/material-icons.css'

Vue.use(Vuetify);
// Vue.use(VeeValidate);

// Vue.use(Vuetify, {
//   iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
// })

export default {  
data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz']
  })
}
</script>


<template>
<div>
<v-app id="inspire">
    <v-container>
      <v-layout wrap align-center>
        <v-flex xs12 sm6 d-flex>
          <v-select
            :items="items"
            label="Outline style"
            outline
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>

<style>
.application--wrap {
  min-height: initial;
}
</style>