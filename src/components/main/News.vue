<template>
  <div>
    <Card :title="title" :showMore="showMore" :sprite="sprite" :catData="newsData">
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
      title: "新闻资讯",
      showMore: true,
      sprite: "sprite-news",
      newsData: [
        {
          tab: "热门",
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
          tab: "新闻",
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
          tab: "公告",
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
          tab: "活动",
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
          tab: "赛事",
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
  computed: {
    
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