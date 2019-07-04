<script>
import Btn from '~/components/Button/Button.vue'
import Heading from '~/components/Heading.vue'
export default {
    components: {
      Btn,
      Heading
    },
    data: () => ({
    columns: [
      {
        image: "banner-1.jpg",
        columnHeading: 'Column 1',
        columnDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere non nobis velit doloremque. Eius ipsa veniam eveniet vero esse eos. Aspernatur, blanditiis ducimus sint earum nesciunt atque quod doloremque! Qui?'
      },
      {
        image: "banner-2.jpg",
        columnHeading: 'Column 2',
        columnDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum modi cum beatae reiciendis unde aut ipsam rerum officia magni sit quasi perspiciatis, consequatur veniam vitae tempora, laborum provident ducimus?'
      },
      {
        image: "banner-3.jpg",
        columnHeading: 'Column 3',
        columnDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum libero facilis optio error expedita exercitationem similique nihil, ducimus, nesciunt nam eligendi aliquam sunt quaerat adipisci, tempore nulla quas obcaecati repudiandae.'
      }
    ]
  })
}



</script>

<template>
    <b-container>
        <b-row class="py-5">
            <b-col cols="12" md="4" v-for="(items, index) in columns" :key="index">
                <img :src="`images/${items.image}`" alt=""/>
                <h5 class="my-3">{{ items.columnHeading }}</h5>
                <p>{{ items.columnDesc }}</p>
            </b-col>
        </b-row>
        <!-- <Btn to="/about">I'm a Button</Btn> -->
    </b-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>