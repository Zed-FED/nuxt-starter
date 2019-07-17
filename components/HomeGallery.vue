
<script>
  import Vue from 'vue';
  import Lightbox from 'vue-my-photos';
  import SectionHeading from '~/components/SectionHeading.vue';

  Vue.component('lightbox', Lightbox);
  import '~/node_modules/vue-my-photos/dist/lightbox.css';
  Vue.use(Lightbox);

  var photoDir =
  'https://unpkg.com/vue-my-photos@1.0.0/src/assets/';

var imageList =
  [{'name':'mountains.jpg',
    'alt':'The Dolomites',
    'filter':'nature',
    'id':'image1' },

   {'name':'bird.jpg',
    'alt':'It is a bird on a tree!',
    'filter':'animals',
    'id':'image2'  },

   {'name':'alps.jpg',
    'alt':'I will live here someday',
    'filter':'nature',
    'id':'image3'  },

   {'name':'bear.jpg',
    'alt':'Friendly bear',
    'filter':'animals',
    'id':'image4'  },

   {'name':'canyon.jpg',
    'alt':'A worthy hike',
    'filter':'nature',
    'id':'image5'  },

   {'name':'monumentvalley.jpg',
    'alt':'Monument Valley',
    'filter':'nature',
    'id':'image6'  },

   {'name':'puppy.jpg',
    'alt':'Puppy with a feather',
    'filter':'animals',
    'id':'image7'  },

   {'name':'redwoods.jpg',
    'alt':'Foggy evening in the Redwoods',
    'filter':'nature',
    'id':'image8'  } ];

  export default {
    components: {
      SectionHeading
    },
    data() {
      return {
        thumbnailDir: photoDir,
        images: imageList,
        galleryFilter: 'all'
      }
    },
    methods: {
      showLightbox: function(imageName) {
        this.$refs.lightbox.show(imageName);
      },
      updateFilter(filterName) {
        this.galleryFilter = filterName;
      }
    },
    computed: {
      filteredImages: function() {
        if (this.galleryFilter === 'all') {
          return this.images;
        } else {
          return this.images.filter(image => image.filter === this.galleryFilter);
        }
      }
    }
  }
</script>

<template>
<div class="home-gallery my-5">
  <b-container>
    <SectionHeading heading="Gallery" content="This component is for viewing purpose"/>
    <div id="filters" class="text-center">
    <form><fieldset>
      <span>
        <input type="radio" id="all"
          name="filters" checked
          v-on:click="updateFilter('all')"/>
        <label for="all">All</label>
      </span>
      <span>
        <input type="radio" id="animals"
            name="filters"
            v-on:click="updateFilter('animals')"/>
        <label for="animals">Animals</label>
      </span>
      <span>
        <input type="radio" id="nature"
           name="filters"
           v-on:click="updateFilter('nature')" />
        <label for="nature">Nature</label>
      </span>
    </fieldset></form>
  </div>

  <transition-group name="thumbnailfade" tag="div" class="gallery-image-container">
    <img v-for="thumb in filteredImages"
         :key="thumb.id"
         @click="showLightbox(thumb.name)"
         :src="thumbnailDir + thumb.name"
         :alt="thumb.alt"
         :title="thumb.alt" />
  </transition-group>

  <lightbox id="mylightbox"
      ref="lightbox"
      :images="images"
      :directory="thumbnailDir"
      :filter="galleryFilter"
      :timeoutDuration="5000"
  />
  </b-container>
  </div>
</template>

<style lang="scss" scoped>
#filters {
  // width: 500px;
  margin: 30px auto 20px;
}

#filters span {
  margin: 0;
  display: inline-block;
}

img {
  width: 245px;
  height: 160px;
  margin: 15px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
  display: inline-block;
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}

.home-gallery fieldset span {
  position: relative;
}
.home-gallery input[type="radio"] {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.home-gallery fieldset label {
  cursor: pointer;
  background-color: $primary-color;
  color: $white;
  padding: 10px 20px;
  margin-bottom: 0;
}
.gallery-image-container {
  text-align: center;
}
</style>

