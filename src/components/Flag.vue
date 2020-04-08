<template lang="pug">
  .section
    div
      img.k-shadow(:src='`flags/${data}.svg`')
      .title {{data}}
</template>


<script>
export default {
  props: {
    data: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang='scss' scoped>
  .section {
    display: flex;
    justify-content: center;
    vertical-align: middle;
    height: 100vh;
    flex-direction: column;
    text-align: center;
    img {
      width: 50%;
      margin: auto;
    }
    .title {
      margin-top: 3rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 3rem;
    }
  }
</style>
