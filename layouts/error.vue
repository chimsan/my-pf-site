<template lang="pug">
  div(class="page-error")
    h3 error
    p エラーコード：
      span(v-html="error.statusCode")
</template>

<script>
export default {
  name: 'errorPage',
  props: {
    error: { type: Object, default() { return {} } }
  }
}
</script>
<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
.page-work {
  margin-top: 3rem;
}
</style>