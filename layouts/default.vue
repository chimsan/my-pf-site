<template lang="pug">
  div(class="wrapper")
    SiteHeader
    transition(name="page")
      Nuxt
    SiteFooter
</template>

<style lang="scss">
</style>

<script>
export default {
  name: 'default'
}
</script>
