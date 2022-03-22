<template lang="pug">
  section(class="section c-image-slider")
    div(class="top-image-1")
      img(src="@/assets/images/top-image-1.jpg" alt="キービジュアル")

</template>

<script>
export default {
  name: 'ImageSliderBox'
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/global' as g;

.c-image-slider {
  margin-top: 6rem;
  @media screen and (max-width: g.$device-sp) {
    margin-top: 3rem;
  }

}
div[class^="top-image-"] {
  margin: 0 auto;
  width: 100%;
  min-width: calc(g.$device-sp-min - 4.5rem);
  max-width: 1080px;
  max-height: 608px;
  height: auto;
  display: block;
  &>img {
    width: 100%;
    height: auto;
  }

}

</style>
