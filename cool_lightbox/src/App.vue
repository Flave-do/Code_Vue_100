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
        :style="{ backgroundImage: 'url(' + image + ')' }"
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
        '~@/assets/logo.png',
        '~@/assets/logo.png',
      ],
      index: null
    };
  },
};
</script>

<style>

</style>
