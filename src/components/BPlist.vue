<template>
    <div class="bp-recomlist-list">
            <van-row>
                <van-col span="12" v-for="(item,index) in datas" :key="index">
                    <div class='bp-recomlist-list-main'>
                        <div class='bp-recomlist-list-main-clothes'>
                           <img :src="item.img"> 
                        </div>
                        <div class="bp-recomlist-list-main-title">
                            <span>
                                <i>热卖</i>{{item.title}}
                            </span>
                        </div>
                        <div class="bp-recomlist-list-main-price">
                            <div class='price'>
                                ￥{{item.price}}
                            </div>
                            <div class='add-shopcar'>
                                <van-icon name="shopping-cart" color='#fe7537' size='20px'/>
                            </div>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
</template> 
<script>
export default {
    props:['data'],
    data(){
        return {
            datas:this.data
        }
    },
    mounted(){
        console.log(this.datas)
    }
}
</script>
<style lang="less">
.bp-recomlist-list {
            margin: 10px auto 0;
            width: 94%;

            &-main {
                // height: 220px;
                width: 94%;
                margin: auto;
                background: #fffaf8;
                margin-bottom: 10px;

                &-clothes {
                    text-align: center;
                    min-height: 135px;
                    img {
                        width: 70%;
                        margin: 10px auto;
                    }
                }

                &-title {
                    padding: 0 10px;
                    font-size: 12px;
                    line-height: 18px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;

                    i {
                        background: #fe7537;
                        color: #fff;

                        padding: 1px 4px;
                        border-radius: 16px;
                        margin-right: 4px;
                    }
                }

                &-price {
                    font-size: 16px;
                    color: #fe7537;
                    padding: 6px 10px;
                    height: 30px;

                    .price {
                        float: left;
                    }

                    .add-shopcar {
                        float: right;
                    }
                }
            }
        }
</style>
