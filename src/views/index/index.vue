<style lang="less">
@import "./index.less";
</style>
<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <van-row class="head">
        <van-col span="3">
            <van-icon name="apps-o" class="search_letf" color='#fff'/>
        </van-col>
        <van-col span="18">
            <van-field
                class='search_input'
                v-model="searchItem"
                clearable
                left-icon="search"
                :placeholder="searchTip"
                @click-left-icon="$toast('question')"
            />
        </van-col>
        <van-col span="3">
            <van-icon name="service" class="search_right" color='#fff'/>
        </van-col>
    </van-row>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" class='bp-banner'>
        <van-swipe-item v-for='(item,index)  in datas.swiper' :key="index">
            <img :src="item" alt="">
        </van-swipe-item>
        <!-- 自定义滑块 -->
        <!-- <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/4
        </div> -->
    </van-swipe>
    <!-- 导航 -->
    <div class='Navbar'>
        <router-link to="/Classlist">
        <van-row class="nav_main">
            <van-col span="6" v-for="(item,index) in datas.navdata"  :key="index">
                <div class='img-box'><img :src="item.img" alt=""></div>
                <p class='img-item'>{{item.title}}</p>
            </van-col>
        </van-row>
        </router-link>
    </div>
    <!-- 优惠信息 -->  
    <div class='bp-discount'>
        <img :src="img.discount" alt="优惠">
    </div>
    <!-- 推荐 -->
    <div class="bp-recommend">
        <van-row>
            <van-col span="11" class='bp-recom-left'>
                <div class='bp-recom-main'>
                    <p class='bp-recom-title'>今日特价</p>
                    <p class='bp-recom-item'>流行单品折上折</p>
                    <img :src="img.reimgletft" alt="">
                </div>
            </van-col>
            <van-col span="13" class='bp-recom-right'>
                <div class='bp-recom-top'>
                    <p class='bp-recom-title'>商品推荐</p>
                    <p class='bp-recom-item'>给孩子最好的</p>
                    <img :src="img.reimgritop" alt="">
                </div>
                <div class='bp-recom-buttom'>
                    <p class='bp-recom-title'>热卖推荐</p>
                    <p class='bp-recom-item'>优惠选购</p>
                    <img :src="img.reimgribt" alt="">
                </div>
            </van-col>
        </van-row>    
    </div>
    <!-- 猜你喜欢 -->
    <div class='bp-recomlist'>
        <router-link to='/hot'>
        <div class="bp-recomlist-link">
            <div class="bp-recomlist-link-left">
                <img :src="img.Guessyoulikeit" alt="">
            </div>
            <div class="bp-recomlist-link-right">
                <span>查看更多</span>
                <van-icon name="arrow" color='#fe7537' size='24px'/>
            </div>
        </div>
        </router-link>
        <v-bplist :data='datas.recomlist'></v-bplist>
    </div>
    <!-- 专装热卖 -->
    <div class="bp-hot">
        <router-link to="/hot"></router-link>
        <div class="bp-hot-link">
            <div class="bp-recomlist-link-left">
                <img :src="img.HOT" alt="">
            </div>
            <div class="bp-recomlist-link-right">
                <span>查看更多</span>
                <van-icon name="arrow" color='#fe7537' size='24px'/>
            </div>
        </div>
        <div class="bp-hot-list">
            <img class='hotTitle' :src="img.hotTitle" alt="">
            <van-row gutter="20">
                <div class=''>
                    <van-col span='8'>
                        <img :src="img.hotimg" alt="">
                        <div class='hotprice'>
                            ￥150.00
                        </div>
                    </van-col>
                    <van-col span='8'>
                        <img :src="img.hotimg2" alt="">
                        <div class='hotprice'>
                            ￥150.00
                        </div>
                    </van-col>
                    <van-col span='8'>
                        <img :src="img.hotimg3" alt="">
                        <div class='hotprice'>
                            ￥150.00
                        </div>
                    </van-col>
                </div>
            </van-row>
        </div>
        <div class='bp-Sep'></div>
        <div class="bp-hot-list">
            <img class='hotTitle' :src="img.hotTitle" alt="">
            <van-row gutter="20">
                <div class=''>
                    <van-col span='8'>
                        <img :src="img.hotimg" alt="">
                        <div class='hotprice'>
                            ￥150.00
                        </div>
                    </van-col>
                    <van-col span='8'>
                        <img :src="img.hotimg2" alt="">
                        <div class='hotprice'>
                            ￥150.00
                        </div>
                    </van-col>
                    <van-col span='8'>
                        <img :src="img.hotimg3" alt="">
                        <div class='hotprice'>
                            ￥150.00
                        </div>
                    </van-col>
                </div>
            </van-row>
        </div>
    </div>
    <van-tabbar
      v-model="active"
      active-color="#fe7537"
    >
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import index from "@/http/mock.js"; //模拟数据
import Bplist from '@/components/BPlist'
export default {
components:{'v-bplist':Bplist},
  data() {
    return {
      datas: {
        swiper: [
          "static/images/banner.png",
          "static/images/banner.png",
          "static/images/banner.png",
          "static/images/banner.png"
        ],
        navdata: [
          {
            img: "static/images/t1.png",
            title: "上装上新"
          },
          {
            img: "static/images/t2.png",
            title: "下装上新"
          },
          {
            img: "static/images/t3.png",
            title: "套装上新"
          },
          {
            img: "static/images/t4.png",
            title: "亲子装上新"
          },
          {
            img: "static/images/b1.png",
            title: "鞋子上新"
          },
          {
            img: "static/images/b2.png",
            title: "玩具上新"
          },
          {
            img: "static/images/b3.png",
            title: "辣爸辣妈"
          },
          {
            img: "static/images/b4.png",
            title: "全部上新"
          }
        ],
        recomlist:[
            {
                img:"static/images/0A6A2954.png",
                title:'新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤',
                price:'280'
            },
            {
                img:"static/images/0A6A2957c.png",
                title:'2新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤',
                price:'1280'
            },{
                img:"static/images/0A6A2954.png",
                title:'12新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤',
                price:'280'
            },
            {
                img:"static/images/0A6A2957c.png",
                title:'2新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤',
                price:'1280'
            },{
                img:"static/images/0A6A2954.png",
                title:'12新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤',
                price:'2820'
            },
            {
                img:"static/images/0A6A2957c.png",
                title:'24新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤',
                price:'1280'
            },
        ]
      },
      loading: true,
      active: 0,
      searchItem: "",
      searchTip: "纯棉T恤",
      img: {
        t1: "static/images/t1.png",
        t2: "static/images/t2.png",
        t3: "static/images/t3.png",
        t4: "static/images/t4.png",
        b1: "static/images/b1.png",
        b2: "static/images/b2.png",
        b3: "static/images/b3.png",
        b4: "static/images/b4.png",
        banner: "static/images/banner.png",
        discount: "static/images/discount.png",
        reimgletft: "static/images/reimgletft.png",
        reimgritop: "static/images/reimgritop.png",
        reimgribt: "static/images/reimgribt.png",
        Guessyoulikeit: "static/images/Guessyoulikeit.png",
        HOT: "static/images/HOT.png",
        clothes1: "static/images/0A6A2954.png",
        clothes2: "static/images/0A6A2954c.png",
        hotTitle: "static/images/hotTitle.png",
        hotimg: "static/images/hotimg.png",
        hotimg2: "static/images/hotimg2.png",
        hotimg3: "static/images/hotimg3.png"
      }
    };
  },

  beforeCreate() {
    this.$api({
      method: "post",
      url: "/index"
    })
      .then(response => {
        console.log(response);
        // this.datas = response.data;
      })
      .catch(function(error) {
        alert(error);
      });
  }
};
</script>


