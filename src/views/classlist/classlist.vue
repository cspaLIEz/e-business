<template>
  <div class="classlist">
    <van-nav-bar title="最新上新" left-arrow @click-left="onClickLeft"/>
    <!-- <van-tabs>
      <van-tab v-for="(item,index) in data" :title="item.title" :key='index'>{{ item.title }}</van-tab>
    </van-tabs>-->
    <div class="bp-tabs">
      <div class="bp-tab-main">
        <div
          :class="'bp-tab'+' '+(index==active?'active':'')"
          v-for="(item,index) in data"
          :key="index"
          @click="onChangetab(index)"
        >
          {{ item.title }}
          <p class="border"></p>
        </div>
      </div>
    </div>
    <div class="hot-title-img">
      <img :src="hotTitle" alt>
    </div>
    <div>
      <v-bplist :data="datas.hotlist"></v-bplist>
    </div>
  </div>
</template>
<script>
import Bplist from "@/components/BPlist";
export default {
  components: { "v-bplist": Bplist },

  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.back(-1);
    },
    onChangetab(item) {
        this.active=item
    }
  },
  data() {
    return {
      active: 0,
      data: [
        {
          title: "上装"
        },
        {
          title: "下装"
        },
        {
          title: "套装"
        },
        {
          title: "亲子装"
        },
        {
          title: "鞋"
        },
        {
          title: "玩具"
        },
        {
          title: "辣爸辣妈"
        },
        {
          title: "全部"
        }
      ],
      datas: {
        hotlist: [
          {
            img: "static/images/0A6A2954.png",
            title: "新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "280"
          },
          {
            img: "static/images/0A6A2957c.png",
            title: "2新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "1280"
          },
          {
            img: "static/images/0A6A2954.png",
            title: "12新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "280"
          },
          {
            img: "static/images/0A6A2957c.png",
            title: "2新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "1280"
          },
          {
            img: "static/images/0A6A2954.png",
            title: "12新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "2820"
          },
          {
            img: "static/images/0A6A2957c.png",
            title: "24新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "1280"
          },
          {
            img: "static/images/0A6A2954.png",
            title: "新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "280"
          },
          {
            img: "static/images/0A6A2957c.png",
            title: "2新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "1280"
          },
          {
            img: "static/images/0A6A2954.png",
            title: "12新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "280"
          },
          {
            img: "static/images/0A6A2957c.png",
            title: "2新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "1280"
          },
          {
            img: "static/images/0A6A2954.png",
            title: "12新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "2820"
          },
          {
            img: "static/images/0A6A2957c.png",
            title: "24新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤",
            price: "1280"
          }
        ]
      },
      hotTitle: "static/images/hotTitle.png"
    };
  }
};
</script>
<style lang="less">
@import "./classlist.less";
</style>
