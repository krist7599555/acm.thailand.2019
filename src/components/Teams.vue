<template lang='pug'>
  .hero.is-fullheight.is-fullwidth
    .hero-title
    .hero-body
      .gridd(:len='data.length')
        template(v-for='p in data')
          Team(:title='p.team' :img='p.img' :style='mystyle')


</template>

<script>
import Team from './Team'
export default {
  name: 'Teams',
  components: {
    Team
  },
  props: {
    data: {
      type: Array,
      // default: () => [
      //   {team: "ABJ", img: "https://www.cs.ubc.ca/sites/cs/files/node_images/acm_world_final_2019.jpg",},
      //   {team: "ABJ", img: "https://www.cs.ubc.ca/sites/cs/files/node_images/acm_world_final_2019.jpg",},
      //   {team: "ABJ", img: "https://www.cs.ubc.ca/sites/cs/files/node_images/acm_world_final_2019.jpg",},
      //   {team: "ABJ", img: "https://www.cs.ubc.ca/sites/cs/files/node_images/acm_world_final_2019.jpg",},
      // ]
    }
  },
  computed: {
    mystyle() {
      // switch (this.data.length) {
      // case 2: return "width: 45%; max-height: 80vh";
      // case 3: return "width: 33%; max-height: 80vh";
      // case 4: return "width: 45%; max-height: 40vh";
      // }
      return ""
    }
  }
}
</script>

<style lang="scss" scoped>
.gridd {
  display: grid;
  max-width: calc(100vw - 10%);
  max-height: calc(100vh - 6rem);
  margin: auto;
  grid-gap: 1em;
  &[len='4'] {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  &[len='3'] {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  &[len='2'] {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
