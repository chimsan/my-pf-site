<template lang="pug">
  section(class="section c-qiita")
    h3(id="qiita") Qiita
    p
      | 技術的な情報まとめ（諸事情により限定公開）
    ul
      li
        a(href='https://qiita.com/minec117_/private/682b7413949fcfb43c44' target='_blank')
          | vue-chart.jsで折れ線グラフを描く
      li
        a(href='https://qiita.com/minec117_/private/deee0afc59a47c5d54d3' target='_blank')
          | nuxt.jsの導入手順まとめ
      li
        a(href='https://qiita.com/minec117_/private/516eb8c162d359138643' target='_blank')
          | vue2からvue3へ
      li
        a(href='https://qiita.com/minec117_/private/f95c12fb24b96e6a9924' target='_blank')
          | CSS Grid layout調べた
</template>

<script>
export default {
  name: 'BoxQiita'
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.c-qiita {
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
}

</style>
