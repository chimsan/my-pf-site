<template lang="pug">
  header(id="header")
    h1
      | <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="253" height="53" viewBox="0 0 253 53">
      |   <text id="Mineg.jp" transform="translate(0 28)" fill="#29000a" font-size="32" font-family="BIZ-UDPGothic, BIZ UDPGothic"><tspan x="0" y="0">Mineg.jp</tspan></text>
      |   <text id="my_portfolio_site" data-name="my portfolio site" transform="translate(0 51)" fill="#29000a" font-size="16" font-family="BIZ-UDPGothic, BIZ UDPGothic"><tspan x="0" y="0">welcome to my portfolio site</tspan></text>
      | </svg>
    SiteMenu
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
@use '@/assets/scss/global' as g;
#header {
  min-width: g.$device-sp-min;
  padding: 2.5rem 10rem;
  border-bottom: solid 2px g.$line-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: g.$device-sp) {
    padding: 1rem 2.5rem;
  }
  h1 {
    flex-grow: 0;
  }
}
</style>
