<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <!--<div class="swiper-pagination" slot="pagination"></div>-->
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
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
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    scrollbar: '.swiper-scrollbar'
                    // loop: true
                },
                swiperList: [
                    {id: '001', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'},
                    {id: '002', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'},
                    {id: '003', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'}
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .wrapper {
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.7%
        background: #eee
        .swiper-img {
            width: 100%
        }
    }
    >>> .swiper-pagination-bullet-active {
        background-color: #fff
    }
</style>
