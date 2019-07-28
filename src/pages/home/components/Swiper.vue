<template>
    <div class="wrapper">
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
        name: 'HomeSwiper',
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
            showSwiper() {
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
