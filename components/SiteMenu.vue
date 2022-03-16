<template lang="pug">
  div(class="site-menu")
    div(class="pc")
      nav
        ul
          li
            a(href="/") Profile
          li
            a(href="/") Works
    div(class="sp")
      | sp
      //- nav
      //-   ul
      //-     li
      //-       a(href="/") TOP
      //-     li
      //-       a(href="/") Profile
      //-     li
      //-       a(href="/") Skill
      //-     li
      //-       a(href="/") Qiita
      //-     li
      //-       a(href="/") Works
</template>

<script>
export default {
  name: 'SiteMenu'
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.site-menu {
  flex-grow: 1;
  .sp {
    @media screen and (min-width: g.$device-pc) {
      display: none;
    }
  }
  .pc {
    @media screen and (max-width: g.$device-sp) {
      display: none;
    }

    a {
      position: relative;
      display: inline-block;
      transition: .25s;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 2px;
        background-color: g.$fc-link-hover;
        transition: .25s;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }

    }
    ul {
      display: flex;
      justify-content: flex-end;
      li {
        flex-grow: 0;
        font-size: 2.4rem;
        margin-right: 3rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
