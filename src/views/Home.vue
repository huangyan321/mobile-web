<template>
  <div class="home">
    <div class="nav-top">
      <div class="bgc-black-light p-y-3 d-fl jc-around" style="height: 4rem">
        <div class="d-fl ai-center p-l-4 flex-1">
          <div class="sprite sprite-logo"></div>
          <div class="m-l-3">
            <h1 class="fs-lg color-white">王者荣耀</h1>
            <div class="color-grey fs-xs"><span>团队成就更多</span></div>
          </div>
        </div>
        <button class=" bgc-primary btn m-x-3">立即下载</button>
      </div>
    </div>
    <div class="main">内容</div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" >

</style>>

