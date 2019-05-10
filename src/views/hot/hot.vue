<template>
  <div>
    <van-nav-bar title="热卖推荐" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
    <v-bplist :data="datas"></v-bplist>
  </div>
</template>
<script>
import Bplist from "@/components/BPlist";
export default {
  components: { "v-bplist": Bplist },
  data() {
    return {
      datas: [
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
    };
  },
  methods: {
    onClickLeft() {
    //   Toast("返回");
      this.$router.back(-1)

    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<style lang="less">
</style>