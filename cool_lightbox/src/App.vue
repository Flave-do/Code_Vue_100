<template>
  <div id="app">
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
// use the component
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
 
export default {
  components: {
    CoolLightBox,
  },
  data: function () {
    return {
      items: [
        {
          src:require('./assets/logo.png'),
          thumb:require('./assets/logo.png'),
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
        },
      ],
      index: null
    };
  },
};
</script>

<style>

</style>
