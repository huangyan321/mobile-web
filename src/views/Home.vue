<template>
  <!-- <BScroll ref="wrapper"> -->
    <div class="content">
      <div class="nav-top">
        <div class="bgc-black-light p-y-3 d-fl jc-around" style="height: 4rem">
          <div class="d-fl ai-center p-l-4 flex-1">
            <div class="sprite sprite-logo"></div>
            <div class="m-l-3">
              <h1 class="fs-lg color-white">王者荣耀</h1>
              <div class="color-grey fs-xs"><span>团队成就更多</span></div>
            </div>
          </div>
          <button class="bgc-primary btn m-x-3">立即下载</button>
        </div>
      </div>
      <div class="main bgc-primary" style="height: 3rem">
        <div class="nav">
          <ul class="d-fl ai-center jc-around" style="height: 100%">
            <li class="nav-item">
              <router-link
                class="nav-link d-fl jc-center ai-center color-white"
                to="/main"
                ><span class="active active-item">首页</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link d-fl jc-center ai-center color-white"
                to="/main"
                ><span>攻略中心</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link d-fl jc-center ai-center color-white"
                to="/main"
                ><span>赛事中心</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link d-fl jc-center ai-center color-white"
                to="/main"
                ><span>IP新游</span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
  <!-- </BScroll> -->
</template>

<script>
// @ is an alias to /src
// import BScroll from "@/components/common/BetterScroll";

export default {
  name: "Home",
  components: {
    // BScroll,
  },
  mounted() {
  },
};
</script>
<style lang="scss" >
.nav {
  height: 100%;
}

.nav-item {
  height: 100%;
  width: 25%;
  flex: 1;
}
.nav-link {
  width: 100%;
  height: 100%;
}
</style>>

