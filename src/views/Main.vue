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
  </div>
</template>

<script>
import Swiper from "../components/main/Swiper";
import Navigate from "../components/main/Navigate";
import News from "../components/main/News";
export default {
  components: {
    Swiper,
    Navigate,
    News,
  },
};
</script>

<style lang="scss" scoped>
</style>>
