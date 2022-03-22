<template lang="pug">
  section(class="page-work")
    div(class="page-work__inner" v-for="work in workList")
      h3(v-html="work.title")
      ul(class="work-items")
        li(class="work-items__item" v-for="item in work.itemList" @click.prevent="openModalDetail(item)")
          div(class="work-items__thumb")
            img(:src="item.thumb" alt="item.title")
          div(class="work-items__detail" v-html="item.title")

    ModalDetail(v-if="isModalShow" @close-modal-detail="closeModalDetail")
      h4(class="modal__title" v-html="modalDetailData.title")
      div(class="modal__content")
        div(class="modal__thumb")
          img(:src="modalDetailData.thumb" alt="modalDetailData.title")
        div(class="modal__detail")
          p(class="modal__detail-text" v-html="modalDetailData.detail")
          p(class="modal__detail-text" v-html="modalDetailData.skill")

      button(@click="closeModalDetail" class="btn-close-modal")
        | close

</template>

<script>
import thumb1 from '@/assets/images/thumb/thumb1.jpg';
import thumb2 from '@/assets/images/thumb/thumb2.jpg';
import thumb3 from '@/assets/images/thumb/thumb3.jpg';
import thumb4 from '@/assets/images/thumb/thumb4.jpg';
import ModalDetail from '~/components/ModalDetail.vue';

export default {
  name: 'WorkPage',
  components: {
    ModalDetail
  },
  data() {
    return {
      isModalShow: false,
      workList: [
        { title: '個人制作',
          itemList: [
            { title: 'Mineg.jp', detail: '本ポートフォリオサイト<br>デザイン＆コーディング', skill: 'HTML5+CSS3/Nuxt.js/Adobe XD/git', thumb: thumb1 }
          ]
        },
        { title: '業務',
          itemList: [
            { title: 'アプリゲーム公式サイトA', detail: 'TOP＆子ページコーディング<br>PC版,SP版レスポンシブ対応', skill: 'HTML5+CSS3/Ruby on rails/Vue.js/JS,TS/git', thumb: thumb2 },
            { title: 'アプリゲーム公式サイトB', detail: 'TOP＆子ページコーディング', skill: 'HTML5+CSS3/Ruby on rails/Vue.js/JS,TS/git', thumb: thumb3 },
            { title: 'アプリゲーム公式イベント用サイトC', detail: 'コーディング/静的化', skill: 'HTML5+CSS3/Nuxt.js/Vue.js/JS/git', thumb: thumb4 }
          ]
        }
      ],
      modalDetailData: { title: '', detail: '', skill: '', thumb: '' }
    }
  },
  methods: {
    openModalDetail(val) {
      console.log("val:", val)
      // this.modalDetailData
      this.modalDetailData = val;
      console.log("modalDetailData:", this.modalDetailData)
      this.isModalShow = true
    },
    closeModalDetail() {
      this.isModalShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
@use '@/assets/scss/global' as g;
.page-work {
  margin-top: 3rem;
  &__inner {
    margin-bottom: 3rem;
  }
}
.work-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  &__item {
    flex: 0 1 30%;
    margin-bottom: 2rem;
    @media screen and (max-width: g.$device-sp) {
      flex: 0 1 100%;
      padding: 0 2rem;
      box-sizing: border-box;
      margin-bottom: 4rem;
    }
  }
  &__thumb {
    margin-bottom: 1rem;
    line-height: 0;
    border: 1px solid g.$line-color-thumb;
    box-sizing: border-box;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__detail {
    font-size: 1.2rem;
    font-weight: bold;
    @media screen and (max-width: g.$device-sp) {
      font-size: 1.6rem;
      margin-bottom: .5rem;
    }
  }

}

.modal{
  &__title {
    font-size: 2.4rem;
    margin: 0 0 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid g.$line-color;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__thumb {
    border: 1px solid g.$line-color-thumb;
    flex: 0 1 45%;
    width: 45%;
    min-width: 200px;
  }
  &__detail {
    flex: 0 1 50%;
  }
  @media screen and (max-width: g.$device-sp) {
    &__content {
      justify-content: center;

    }
    &__thumb {
      flex: 0 1 100%;
      margin-bottom: 1rem;
    }
    &__detail {
      flex: 0 1 100%;
      margin-bottom: 1rem;
    }
  }
}
.btn-close-modal {
  width: 12rem;
  height: auto;
  padding: 0.75rem 0;
  text-align: center;
  font-size: 2.2rem;
  line-height: 2.2rem;
  box-sizing: border-box;
  margin: 4rem auto 2rem;
  background-color: g.$bg-footer;
  border: 1px solid g.$fc-base;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: g.$bg-base;
  }
}
</style>