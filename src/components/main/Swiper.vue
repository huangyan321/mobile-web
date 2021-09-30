<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        ><img src="@/assets/img/swiper1.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="@/assets/img/swiper2.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="@/assets/img/swiper3.jpeg" alt=""
      /></swiper-slide>
      <div class="swiper-pagination text-right" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "sp",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        width: window.innerWidth,
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>