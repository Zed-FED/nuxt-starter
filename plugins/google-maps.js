import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD4KE1z8ZaZ4Aht1OuiN7gK3Sm0caZ_eLI",
    libraries: "places"
  }
});
