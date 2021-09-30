<template>
  <div class="main">
    <div class="swiper">
      <Swiper></Swiper>
    </div>
    <div>
      <Navigate></Navigate>
    </div>
    <div>
      <News></News>
    </div>
    <div>
      <HeroList></HeroList>
    </div>
    <div>
      <NiceVideo></NiceVideo>
    </div>
  </div>
</template>

<script>
import Swiper from "../components/main/Swiper";
import Navigate from "../components/main/Navigate";
import News from "../components/main/News";
import HeroList from "../components/main/HeroList";
import NiceVideo from "../components/main/NiceVideo";
export default {
  components: {
    Swiper,
    Navigate,
    News,
    HeroList,
    NiceVideo,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
</style>>
