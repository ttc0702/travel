<template>
    <div class="gallery" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption"  v-if="showSwiper">
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="gallery-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommonGallery',
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    loop: true,
                    observer: true,
                    observeParents: true
                }
            }
        },
        props: {
            imgs: {
                type: Array,
                default() {
                    return ['http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg', 'http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_r_800x800_5cdd4127.jpg']
                }
            }
        },
        computed: {
            showSwiper () {
                return this.imgs.length;
            }
        },
        methods: {
            handleGalleryClick() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped lang="less">
    .gallery /deep/ .swiper-container {
        overflow: inherit;
    }
    .gallery {
        display: flex;
        justify-content: center;
        flex-direction: column;
        /*align-items: center;*/
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10;
        background-color: #000;
        .wrapper {
            width: 100%;
            .gallery-img {
                width: 100%;
            }
            .swiper-pagination {
                color: #fff;
                bottom: -2rem;
            }
        }
    }
</style>
