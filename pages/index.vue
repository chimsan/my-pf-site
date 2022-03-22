<template lang="pug">
  section(class="page-index")
    BoxImageSlider

    div(class="c-arrows")
      SvgArrows

    BoxProfile
    BoxSkill
    BoxQiita
</template>

<script>
import SvgArrows from '@/assets/images/arrows.svg'

export default {
  name: 'IndexPage',
  components: {
    SvgArrows
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.c-arrows {
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: g.$device-sp) {
    margin-top: 3rem;
  }
  svg {
    display: flex;
    justify-content: center;
    margin: auto;
  }
}
</style>
