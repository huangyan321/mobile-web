<template>
  <div>
    <Card
      :title="title"
      :showMore="showMore"
      :sprite="sprite"
      :catData="newsData"
      :tabWidth="tabWidth"
    >
      <template #items="{ category }">
        <div class="list d-fl" v-for="(item, index) of category" :key="index">
          <span class="flag">热门</span>
          <span class="title flex-1">大神带你棋局对弈，探秘峡谷~</span>
          <span class="time">9/24</span>
        </div>
      </template>
    </Card>
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
      tabWidth: "70%",
       newsData: [
        {
          tab: "精品栏目",
          categories: [
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
          ],
        },
        {
          tab: "英雄攻略",
          categories: [
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
          ],
        },
        {
          tab: "赛事精品",
          categories: [
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
            {
              flag: "热门",
              title: "大神带你棋局对弈，探秘峡谷~",
              time: "9/24",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.list{
  line-height: 1.5rem;
  width: 100%;
  margin-top: 1rem;
}
.time {
  width: 55px;
}
.title {
  width: 60%; /* 首先给盒子设置一个宽度 */
  overflow: hidden; /* 超出盒子的内容隐藏 */
  text-overflow: ellipsis; /* 文本超出以省略号结尾 */
  white-space: nowrap; /*禁止换行显示*/
}
</style>