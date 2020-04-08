<template lang="pug">
  .container.is-clipped
    figure
      img(:src='img' style='image-orientation: from-image;')
    .overlay
    .team-title(:style='titleStyle') {{title}}
</template>

<script>
export default {
  props: {
    img: {
      type: String
    },
    title: {
      type: String
    }
  },
  computed: {
    titleStyle() {
      if (this.title.length < 7) return "font-size: 4.5rem";
      if (this.title.length < 10) return "font-size: 4rem";
      if (this.title.length < 13) return "font-size: 3rem";
      if (this.title.length < 15) return "font-size: 2.5rem";
      return "font-size: 2rem";
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  background-image:
  linear-gradient(to bottom, transparent, rgba(32, 31, 29, 0.73));
  background-size: cover;

}
.team-title {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: whitesmoke !important;
  font-size: 3rem;
  font-weight: bold;
}
</style>
