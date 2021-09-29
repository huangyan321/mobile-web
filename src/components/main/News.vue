<template>
  <div class="news bgc-white m-t-3 p-x-3 color-dark">
    <div
      class="p-y-2 d-fl jc-around m-b-2"
      style="height: 3rem; box-sizing: content-box"
    >
      <div class="news-title d-fl flex-1 ai-center">
        <div class="sprite sprite-news"></div>
        <h3 class="m-l-2">新闻资讯</h3>
      </div>
      <div class="d-fl ai-center" style="height: 100%">
        <i class="sprite sprite-more"></i>
      </div>
    </div>
    <div class="main color-dark" style="height: 1rem">
      <div class="nav">
        <ul class="d-fl ai-center jc-between" style="height: 100%">
          <li>
            <span class="active-news active-news-item">热门</span>
          </li>
          <li>
            <span class="active-news active-news-item">新闻</span>
          </li>
          <li>
            <span class="active-news">公告</span>
          </li>
          <li>
            <span class="active-news">活动</span>
          </li>
          <li>
            <span class="active-news">赛事</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content p-y-3">
      <Swiper ref="mySwiper" :options="swiperOptions">
        <SwiperSlide v-for="(item, index) of 5" :key="index"
          ><ul>
            <li v-for="(i, ind) of 5" :key="ind">
              <span>9月29日全服不停机更新公告</span>
            </li>
          </ul></SwiperSlide
        >
      </Swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "news",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
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
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.news-title {
  position: relative;
}
.news-title::after {
  position: absolute;
  bottom: 0;
  content: "";
  width: 100%;
  height: 1px;
  background: #d4d9de;
}
.nav {
  height: 100%;
}

.nav-link {
  width: 100%;
  height: 100%;
}
.content li {
  height: 1.5rem;
  line-height: 1.5rem;
  margin-top: 1rem;
}
</style>