<template lang="pug">
  section(class="fade" :class="{isShow: visible}")
    slot(v-show="visible")
</template>

<script>
export default {
  name: 'FadeIn',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleScroll() {
      if(process.client){
        if(!this.visible) {
          let top = this.$el.getBoundingClientRect().top;
          this.visible = top < window.innerHeight - 100;
        }
      }
    }
  },
  created() {
    if(process.client){
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if(process.client){
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style lang="scss">
.fade {
  opacity: 0;
  transform: translate3d(0, 40px, 0);
  transition: .5s all cubic-bezier(.905, 0, .230, 1.010);
  &.isShow {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
