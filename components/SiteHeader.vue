<template lang="pug">
  div(id="header")
    h1 site-title
    h2 site-caption
    p today is sunny.
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
#header {
  p {
    color: #ff0000;
  }
}
</style>
