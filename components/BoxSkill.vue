<template lang="pug">
  section(class="section c-skill")
    h3(id="skill") Skill
    p
      | HTML5+CSS3 / Vue.js / Nuxt.js / JavaScript / TypeScript / Photoshop / Adobe XD / git / github
    ul
      li
        a(href="https://github.com/chimsan/my-pf-site" target="_blank")
          | 本サイトのリポジトリ - github

</template>

<script>
export default {
  name: 'SkillBox'
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
