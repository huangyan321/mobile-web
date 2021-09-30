<template>
  <div>
    <Card
      :title="title"
      :showMore="showMore"
      :sprite="sprite"
      :imgUrl="imgUrl"
      :tabs="tabs"
    ></Card>
  </div>
</template>
<script>
import Card from "@/components/common/Card";

export default {
  components: {
    Card,
  },
  data() {
    return {
      title: "英雄列表",
      showMore: true,
      sprite: "sprite-news",
      imgUrl:
        "https://ossweb-img.qq.com/upload/webplat/info/yxzj/20210623/39070448590418.jpg",
      tabs: ["热门","战士","法师","坦克","刺客","射手","辅助"]
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>