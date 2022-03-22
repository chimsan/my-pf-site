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
  text-align: center;
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
  svg {
    display: flex;
    justify-content: center;
    margin: auto;
  }
}
</style>
