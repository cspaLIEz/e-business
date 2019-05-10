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
        <van-swipe-item>
            <img :src="img.banner" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img :src="img.banner" alt="">
        </van-swipe-item>
        <!-- 自定义滑块 -->
        <!-- <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/4
        </div> -->
    </van-swipe>
    <!-- 导航 -->
    <div class='Navbar'>
        <van-row class="nav_main">
            <van-col span="6">
                <div class='img-box'><img :src="img.t1" alt=""></div>
                <p class='img-item'>上装上新</p>
            </van-col>
            <van-col span="6">
                <div class='img-box'><img :src="img.t2" alt=""></div>
                <p class='img-item'>下装装上新</p>
            </van-col>
            <van-col span="6">
                <div class='img-box'><img :src="img.t3" alt=""></div>
                <p class='img-item'>套装上新</p>
            </van-col>
            <van-col span="6">
                <div class='img-box'><img :src="img.t4" alt=""></div>
                <p class='img-item'>亲子装上新</p>
            </van-col>
            <van-col span="6">
                <div class='img-box'><img :src="img.b1" alt=""></div>
                <p class='img-item'>鞋子上新</p>
            </van-col>
            <van-col span="6">
                <div class='img-box'><img :src="img.b2" alt=""></div>
                <p class='img-item'>玩具上新</p>
            </van-col>
            <van-col span="6">
                <div class='img-box'><img :src="img.b3" alt=""></div>
                <p class='img-item'>辣爸辣妈</p>
            </van-col>
            <van-col span="6">
                <div class='img-box'><img :src="img.b4" alt=""></div>
                <p class='img-item'>全部上新</p>
            </van-col>
        </van-row>
    <!-- 优惠信息 -->
    </div>
        
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
        <div class="bp-recomlist-link">
            <div class="bp-recomlist-link-left">
                <img :src="img.Guessyoulikeit" alt="">
            </div>
            <div class="bp-recomlist-link-right">
                <span>查看更多</span>
                <van-icon name="arrow" color='#fe7537' size='24px'/>
            </div>
        </div>
        <div class="bp-recomlist-list">
            <van-row>
                <van-col span="12" v-for="index in 6" :key="index">
                    <div class='bp-recomlist-list-main'>
                        <div class='bp-recomlist-list-main-clothes'>
                           <img :src="img.clothes1"> 
                        </div>
                        <div class="bp-recomlist-list-main-title">
                            <span>
                                <i>热卖</i>新款夏季儿童短袖套装男女t恤套装男女t恤套装男女t恤
                            </span>
                        </div>
                        <div class="bp-recomlist-list-main-price">
                            <div class='price'>
                                ￥280.00
                            </div>
                            <div class='add-shopcar'>
                                <van-icon name="shopping-cart" color='#fe7537' size='20px'/>
                            </div>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
    <!-- 专装热卖 -->
    <div class="bp-hot">
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
                <img :src="img.hotTitle" alt="">
            <van-row gutter="20">
                
                <van-col span='8'>
                    <img :src="img.hotimg" alt="">
                </van-col>
                <van-col span='8'>
                    <img :src="img.hotimg2" alt="">
                </van-col>
                <van-col span='8'>
                    <img :src="img.hotimg3" alt="">
                </van-col>
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
export default {
  data() {
    return {
      datas: {
        section1: {},
        section2: {},
        section3: {},
        section4: {},
        swiper: []
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
        hotTitle:'static/images/hotTitle.png',
        hotimg:'static/images/hotimg.png',
        hotimg2:'static/images/hotimg2.png',
        hotimg3:'static/images/hotimg3.png',
      }
    };
  },

  beforeCreate() {
    this.$api({
      method: "post",
      url: "/index"
    })
      .then(response => {
        this.datas = response.data;
      })
      .catch(function(error) {
        alert(error);
      });
  }
};
</script>


