<template lang="pug">
  section(class="section c-profile")
    h3(id="profile") Profile
    div(class="c-profile__inner")
      figure
        img(src="@/assets/images/icon-prof.jpg" width="187" height="auto" alt="プロフィール画像")

      div
        p(class="c-profile__name")
          | 峯垣 千春<br>
        p
          | CHIHARU MINEGAKI<br>
        p
          | 1990年生まれ、大阪出身、和歌山在住のフロントエンドエンジニア。<br>
          | 大阪の専門学校のWebデザイナーコースを卒業後、上京。<br>
          | 東京にて映像制作会社でのWeb制作に携わったのち、フロントエンドエンジニアとして五年ほどスマートフォン向けブラウザゲームの運用に携わる。<br>
          | 直近二年は複数のスマートフォン向けアプリゲームの公式サイト製作・運用に従事。<br>
          | 趣味は観劇とRPG。<br>

</template>

<script>
export default {
  name: 'ProfileBox'
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
  .c-profile {
    &__inner {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      figure {
        width: 189px;
        height: 189px;
        line-height: 0;
        display: inline-block;
        border: 1px solid g.$line-color;
        margin: 0 2rem 0 0;
        flex: 0 0 auto;
      }
    }
    &__name {
      font-size: g.$fs-large;
    }
  }
  @media screen and (max-width: g.$device-sp) {
    .c-profile {
      &__inner {
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: space-around;
        figure {
          margin: 0 0 2rem 0;
        }
      }
    }
  }

</style>
