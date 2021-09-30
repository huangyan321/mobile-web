<template>
  <div>
    <Card
      :title="title"
      :showMore="showMore"
      :sprite="sprite"
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
      title: "精彩视频",
      showMore: true,
      sprite: "sprite-news",
      tabs: ["精品栏目","英雄攻略","赛事精品","",""]
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>