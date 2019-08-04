<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <a href="javascript:" class="icon" v-for="item of page" :key="item.id">
                    <img class="icon-img" :src="item.imgUrl" alt="">
                    <span class="icon-desc">{{item.desc}}</span>
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                    // loop: true
                }
            }
        },
        props: {
            list: Array
        },
        computed: {
            pages() {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/variables.less';
    @import "../../../assets/styles/mixins.less";
    .icons {
        overflow: hidden;
        height: 3.7rem;
        padding-top: .1rem;
        background-color: #fff;
        /*padding-bottom: 50%;*/
        /*background-color: #eee;*/
        .icon {
            display: block;
            float: left;
            width: 25%;
            height: 1.6rem;
            /*padding-bottom: 25%;*/
            /*background-color: #ccc;*/
            text-align: center;
            .icon-img {
                margin-top: .1rem;
                width: 1.1rem;
            }
            .icon-desc {
                display: block;
                margin-top: .1rem;
                text-align: center;
                color: @dark-text-color;
                .ellipse;
            }
        }
    }
    /deep/ .swiper-container {
        height: 3.7rem;
    }
    /deep/ .swiper-pagination-bullet-active {
        background-color: rgba(0,175,190,.8);
    }
    /deep/ .swiper-pagination-bullet {
        width: .12rem;
        height: .12rem;
    }
    /deep/ .swiper-pagination {
        bottom: .12rem;
    }
</style>
