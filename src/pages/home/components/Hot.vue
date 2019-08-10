<template>
    <div class="hot">
        <div class="hot-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="喜欢" class="title-icon">
            <span class="title">本周热门榜单</span>
        </div>
        <div class="hot-list">
            <swiper :options="swiperOption"  v-if="showSwiper">
                <!-- slides -->
                <swiper-slide v-for="item of list" :key="item.id" class="hot-item">
                    <router-link :to="'/detail/' + item.id" class="item-a">
                        <img :src="item.tagUrl" class="item-tag" v-if="item.tagUrl">
                        <img :src="item.imgUrl" alt="" class="item-img">
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-price">
                            <span class="price">¥<em>{{item.price}}</em></span>起
                        </div>
                    </router-link>
                </swiper-slide>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHot',
        data() {
            return {
                swiperOption: {
                    scrollbar: '.swiper-scrollbar',
                    // loop: true,
                    freeMode: true,
                    freeModeMomentumRatio: 0.5,
                    freeModeMomentumBounce: false,
                    slidesPerView: 'auto',
                    resistanceRatio: 0
                    // spaceBetween: 6
                    // spaceBetween: 30
                }
            }
        },
        props: {
            list: Array
        },
        computed: {
            showSwiper () {
                return this.list.length;
            }
        }
    }
</script>

<style scoped lang="less">
    .hot {
        margin-top: .2rem;
        background-color: #fff;
        .hot-title {
            height: .92rem;
            line-height: .92rem;
            .title-icon {
                margin-left: .2rem;
                width: .3rem;
                vertical-align: baseline;
            }
            .title {
                font-size: .32rem;
            }
        }
        .hot-list {
            padding-left: .12rem;
            .hot-item {
                position: relative;
                top: 0;
                left: 0;
                width: 2rem;
                padding: .06rem 0 .2rem .12rem;
                /*margin-left: .12rem;*/
                .item-a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: #222;
                    .item-tag {
                        position: absolute;
                        top: 0;
                        left: .08rem;
                        width: .84rem;
                        height: .4rem;
                    }
                    .item-img {
                        width: 2rem;
                    }
                    .item-title {
                        margin-top: .12rem;
                        height: .32rem;
                        line-height: .32rem;
                        font-size: .24rem;
                        text-align: center;
                    }
                    .item-price {
                        height: .32rem;
                        line-height: .32rem;
                        font-size: .24rem;
                        text-align: center;
                        .price {
                            color: #ff8300;
                            em {
                                font-size: .28rem;
                            }
                        }
                    }
                }
            }
        }
    }
    /deep/ .swiper-container {
        padding-right: .24rem;
    }
    /deep/ .swiper-scrollbar {
        height: .06rem;
    }
    /deep/ .swiper-scrollbar-drag {
        background-color: #aaa;
    }
</style>
