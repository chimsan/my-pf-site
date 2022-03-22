<template lang="pug">
  div(class="site-menu")
    div(class="pc")
      nav
        ul
          li
            nuxt-link(to="/#profile")
              | Profile
          li
            nuxt-link(to="/work")
              | Work
    div(class="sp")
      button(@click.prevent="toggleSpMenu" class="button")
        SvgIconSpMenu

    div(class="site-menu-sp" :class="{'isShow': isActive}")
      div(class="btn-sp-menu")
        button(@click.prevent="toggleSpMenu" class="button")
          SvgIconSpMenuActive
      nav
        ul
          li
            a(href="#" style="pointer-events:none;")
              | MENU
            nuxt-link(to="/work" @click.native="toggleSpMenu")
              | Work
          li
            nuxt-link(:to="{ path: '/', hash:'#profile' }" @click.native="toggleSpMenu")
              | Profile
          li
            nuxt-link(to="/#skill" @click.native="toggleSpMenu")
              | Skill
          li
            nuxt-link(to="/#qiita" @click.native="toggleSpMenu")
              | Qiita
</template>

<script>
import SvgIconSpMenu from '@/assets/images/icon-sp-menu.svg'
import SvgIconSpMenuActive from '@/assets/images/icon-sp-menu-active.svg'
export default {
  name: 'SiteMenu',
  data() {
    return {
      isActive: false
    }
  },
  components: {
    SvgIconSpMenu,
    SvgIconSpMenuActive
  },
  methods: {
    toggleSpMenu() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.site-menu {
  position: relative;
  flex-grow: 1;
  @media screen and (max-width: g.$device-sp) {
    flex-grow: 0;
  }

  @media screen and (min-width: g.$device-pc) {
    .sp,
    .site-menu-sp {
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
  @media screen and (max-width: g.$device-sp) {
    .sp {
      position: fixed;
      right: 2rem;
      top: 2rem;
      z-index: g.$z-sp-menu;
    }
    .site-menu-sp {
      &.isShow {
        transform: translateX(0);
      }
      position: fixed;
      width: 300px;
      min-height: 300px;
      top: -2rem;
      left: auto;
      right: 0;
      transform: translateX(100%);
      transition: .25s ease;
      z-index: g.$z-sp-menu-link;
      background-color: g.$bg-header-sp;
      border-bottom-left-radius: 20px;
      .btn-sp-menu {
        line-height: 0;
        position: absolute;
        right: 2rem;
        top: 4rem;
        z-index: g.$z-sp-menu-btn-active;
      }
      ul {
        padding-top: 3rem;
        li {
          text-align: center;
          a {
            display: block;
            padding: 1rem;
            border-bottom: 1px solid g.$line-color;
            color: g.$fc-header-sp;
            line-height: 4.8rem;
            font-size: 2.4rem;
            z-index: g.$z-sp-menu-link;
            &:active {
              border-bottom: 1px solid #e8e1e4;
              background-color: g.$fc-link-hover;
            }
          }
          &:last-child {
            a {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
}
</style>
