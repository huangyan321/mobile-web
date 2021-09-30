<template>
  <div class="news bgc-white m-t-3 p-x-3 color-dark">
    <div
      class="p-y-2 d-fl ai-center"
      style="height: 3rem; box-sizing: content-box"
    >
      <div class="sprite" :class="spriteClass"></div>
      <h3 class="p-x-2 flex-1">{{ title }}</h3>
      <div class="sprite sprite-more" v-if="showMore"></div>
    </div>
    <div class="hero-slide" v-if="imgUrl">
      <ul>
        <li>
          <img :src="imgUrl" style="width: 100%" class="p-b-3" alt="" />
        </li>
      </ul>
    </div>
    <div class="main color-dark" style="height: 1rem">
      <div class="nav">
        <ul
          class="d-fl ai-center jc-between"
          style="height: 100%"
          :style="{width: tabWidth}"
        >
          <li
            v-for="(item, index) in catData"
            :key="index"
            @click="curBtnClick(index)"
          >
            <span
              :class="[
                { 'active-news-item': currentIndex === index },
                'active-news',
              ]"
              >{{ item.tab }}</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="content p-y-3">
      <Swiper ref="mySwiper" :options="swiperOptions">
        <!-- 循环父组件注入的数据 -->
        <SwiperSlide v-for="(category, index) of catData" :key="index">
          <!-- 具名插槽，父级组件可使用#items取到该插槽，通过#items={category}可以取到category.categories，对每一块SwiperSlide进行数据注入 -->
          <slot name="items" :category="category.categories"></slot>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "card",
  props: {
    title: {
      type: String,
      require: true,
      default: () => "",
    },
    showMore: {
      type: Boolean,
      default: () => false,
    },
    sprite: {
      type: String,
      require: true,
      default: () => "",
    },
    imgUrl: {
      type: String,
      require: false,
      default: () => "",
    },
    catData: {
      type: Array,
      default: () => ["请填入"],
    },
    tabWidth: {
      type: String,
      default: () => "100%",
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentIndex: 0,
      swiperOptions: {
        width: window.innerWidth,
        on: {
          //此时调用的是vue components实例，上下文只有全局上下文和函数上下文
          slideChangeTransitionEnd: () => {
            this.currentIndex = this.swiper.activeIndex;
          },
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    tabsFilter() {
      return this.tabs.filter((item) => item !== "");
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    spriteClass() {
      return this.sprite;
    },
  },
  mounted() {},
  methods: {
    curBtnClick(index) {
      this.currentIndex = index;
      this.swiper.slideTo(this.currentIndex);
    },
  },
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
.hero-slide {
  height: auto;
}
</style>