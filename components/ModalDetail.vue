<template lang="pug">
  transition(name="modal-detail" appear)
    div(class="modal-detail__overlay" @click.self="closeModalDetail")
      div(class="modal-detail__frame")
        div(class="modal-detail__inner")
          slot

</template>

<script>
export default {
  name: 'ModalDetail',
  methods: {
    closeModalDetail() {
      this.$emit('close-modal-detail')
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/global' as g;

.modal-detail {
  &__overlay {
    width: 100%;
    height: 100%;
    z-index: g.$z-modal-detail-overlay;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
    @media screen and (max-width: g.$device-sp) {
      align-items: flex-start;
    }
  }
  &__frame {
    border-radius: 2rem;
    height: auto;
    width: 70%;
    overflow: hidden;
    background-color: g.$bg-base;
    @media screen and (max-width: g.$device-sp) {
      margin-top: 4rem;
      width: 85%;
    }
  }
  &__inner {
    height: 100%;
    padding: 3rem;
  }
}

.modal-detail-enter-active,
.modal-detail-leave-active {
  transition: opacity .2s;
  .modal__frame {
    transition: opacity .2s, transform .2s;
  }
}
.modal-detail-leave-active {
  transition: opacity 0.6s ease .2s;
}
.modal-detail-enter,
.modal-detail-leave-to {
  opacity: 0;
  .modal__frame {
    opacity: 0;
    transform: translateY(-20px);
  }
}
@media screen and (max-width: g.$device-sp) {

}
</style>
