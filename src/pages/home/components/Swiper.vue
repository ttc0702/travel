<template>
    <div class="wrapper">
        <!--v-if="showSwiper" 保证先获取完数据再显示轮播图，使轮播图默认显示第一章图片-->
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <a href="javascript:">
                    <img class="swiper-img" :src="item.imgUrl">
                </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
            <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
            <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper', // 这一注意不能是 Swiper，因为引入的 vue-awesome-swiper 中已有组件名为 swiper，而 name 是全局 id，重复会导致 bug。
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    // prevButton: '.swiper-button-prev',
                    // nextButton: '.swiper-button-next',
                    // scrollbar: '.swiper-scrollbar'
                    loop: true
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
    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 26.7%;
        background: #eee;
        .swiper-img {
            width: 100%;
        }
    }
    .wrapper /deep/ .swiper-pagination-bullet-active {
        background-color: #fff;
    }
    /deep/ .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
    }
</style>
