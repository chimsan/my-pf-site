<template lang="pug">
  section(class="section c-image-slider")
    client-only
      swiper(
        class="swiper"
        ref="carousel"
        :options="swiperOptions"
      )
        swiper-slide(v-for="(item,index) in 3" :key="index" class="")
          div(:class="'top-image-' + index" )
            img(src="@/assets/images/example/top-image-5.jpg" alt="top-image")
        //- swiper-slide(v-for="item in imgs" :key="item.id")
        //-   .s-img
        //-     img(:src="item.path" alt="alt")
      .swiper-pagination(slot="pagination")
      .swiper-button-prev(slot="button-prev")
      .swiper-button-next(slot="button-next")
      .swiper-scrollbar(slot="swiper-scrollbar")

</template>

<script>
export default {
  data() {
    return {
      imgs: [
        { path: "../assets/images/example/top-image-5.jpg", alt: "image1" },
        { path: "../assets/images/example/top-image-6.jpg", alt: "image2" },
        { path: "../assets/images/example/top-image-7.jpg", alt: "image3" }
      ],
      swiperOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 1.5,
        centeredSlides: true,
        speed: 1000,
        spaceBetween: 40,
        pagination: {
          clickable: true,
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      }
    }
  }
}
</script>

<style scoped lang="scss">

@use '@/assets/scss/global' as g;

.c-image-slider {
  margin-top: 6rem;
  @media screen and (max-width: g.$device-sp) {
    margin-top: 3rem;
  }

}
div[class^="top-image-"] {
  margin: 0 auto;
  width: 100%;
  min-width: g.$device-sp-min;
  max-width: 1080px;
  max-height: 608px;
  height: auto;
  display: block;
  &>img {
    width: 100%;
    height: auto;
  }
}
.test-img {
  width: 100%;
  height: auto;
  min-height: 304px;
  background-color: #ff4d4d;
}
  .main-swiper{
    position: relative;
    padding: 20px 0;
    .s-img{
      width: 100%;
      max-height: 600px;
    }
    .swiper-pagination{
      position: absolute;
      bottom: 0;
      top: auto;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

</style>
