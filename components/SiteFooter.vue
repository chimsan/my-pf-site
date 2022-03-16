<template lang="pug">
  footer(id="footer")
    nuxt-link(class="btn-goto-top" tag="button" to="#" v-scroll-to="{el: '#header'}")
      span TOP
    h3 contact
    p
      | ご連絡は下記のメールアドレスもしくは&nbsp;
      a(href="https://www.facebook.com/chiharu.minegaki" target="_blank") 当方のfacebook
      | &nbsp;までお願いします。<br>
      span(class="address") minegchi124@gmail.com
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

#footer {
  .btn-goto-top {
    position: absolute;
    left: 50%;
    margin-left: -4rem;
    top: -4rem;
    width: 0;
    height: 0;
    border-left: 4rem solid transparent;
    border-right: 4rem solid transparent;
    border-bottom: 4rem solid g.$bg-footer;
    line-height: 1.15;
    & > span {
      color: g.$fc-footer;
      width: 8rem;
      height: auto;
      text-align: center;
      position: absolute;
      left: -4rem;
      top: 2rem;
      text-align: center;
      display: block;
    }
  }
  a {
    color: g.$fc-footer;
    text-decoration: underline;
  }
  h3 {
    display: inline-block;
    color: g.$fc-footer;
    border-bottom: 1px solid g.$fc-footer;
    margin: 0 0 2.0rem 0;
    &::before {
      display: none;
    }
  }
  p {
    color: g.$fc-footer;
    .address {
      font-style: italic;
    }
  }
  position: relative;
  background-color: g.$bg-footer;
  min-width: g.$device-sp-min;
  box-sizing: border-box;
  margin-top: 12rem;
  padding: 3rem 10rem;
  @media screen and (max-width: g.$device-sp) {
    padding: 3rem 2.5rem;
  }
}
</style>
