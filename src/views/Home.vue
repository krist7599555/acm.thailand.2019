<template>
  <div style='max-height: 100vh; max-width: 100vw; overflow: hidden;'>
    <hooper ref="carousel" :vertical="true" style='height: 100vh' :itemsToShow="1" :centerMode="true">
      <slide v-for='{page, type, data} in slides' :key='page' style='background-color: #FFFDE3'>
        <flag  :data='data' v-if='type == "flag"' />
        <teams :data='data' v-else />
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import Teams from '@/components/Teams.vue';
import Flag from '@/components/Flag.vue';

import * as api from '../api'

export default {
  name: 'home',
  components: {
    Hooper,
    Slide,
    Teams,
    Flag
  },
  data() {
    return {
      slides: []
    }
  },
  created() {
    api.slides().then(s => {
      this.slides = s
    });
  },
  mounted() {
    const carousel = this.$refs.carousel;
    window.addEventListener('keyup', function(event) {
      if (event.key == 'ArrowLeft') {
        carousel.slidePrev();
      }
      if (event.key == 'ArrowRight') {
        carousel.slideNext();
      }
    });
  }
}
</script>
