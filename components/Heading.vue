<template>
  <component :is="type" class="heading">
  	<slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  computed: {
    type() {
      if (this.level === 1) {
        return "h1";
      } else if (this.level === 2) {
        return "h2";
      } else if (this.level === 3) {
        return "h3";
      } else if (this.level === 4) {
        return "h4";
      } else if (this.level === 5) {
        return "h5";
      } else {
        return "h6";
      }
    }
  }
};
</script>