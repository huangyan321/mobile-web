<template>
  <div class="nav">
    <div class="entry-list">
      <ul class="d-fl flex-wrap bgc-white m-t-3 color-dark">
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
        <li class="p-y-3 d-fl flex-c ai-center">
          <i class="d-bl sprite sprite-baoliao"></i><span>爆料站</span>
        </li>
      </ul>
    </div>
    <div
      class="entry-button p-y-2 bgc-light text-center"
      style="height: 2.1rem"
    >
      <span class="sprite sprite-shouqi"></span><span>收起</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.nav li {
  width: 25%;
  position: relative;
}
.nav li::after {
  position: absolute;
  right: 0;
  top: 0.5rem;
  content: "";
  background: #d4d9de;
  height: 80%;
  width: 1px;
}
.nav li:nth-child(4n)::after {
  width: 0;
}
</style>