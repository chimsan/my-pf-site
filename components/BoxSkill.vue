<template lang="pug">
  FadeIn(id="skill" class="section c-skill")
    h3 Skill
    p
      | HTML5+CSS3 / Vue.js / Nuxt.js / JavaScript / TypeScript / Photoshop / Adobe XD / git / github
    ul
      li
        a(href="https://github.com/chimsan/my-pf-site" target="_blank")
          | 本サイトのリポジトリ - github

</template>

<script>
import FadeIn from '~/components/FadeIn.vue'
export default {
  name: 'BoxSkill',
  components: {
    FadeIn
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    list-style: circle;
    line-height: 2.6rem;
    list-style-position: inside;
    a {
      text-decoration: underline;
    }
  }
}

p {
  margin-bottom: 2rem;
}
</style>
