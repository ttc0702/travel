<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <h2 class="banner-info">
                {{sightName}}
            </h2>
            <div class="banner-imgicon">
                <i class="iconfont icon-picfill"></i>
                {{galleryImgs.length}}
            </div>
        </div>
        <animation-fade>
            <common-gallery :imgs="galleryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
        </animation-fade>
    </div>
</template>

<script>
    import CommonGallery from 'common/gallery/Gallery.vue'
    import AnimationFade from 'common/fade/Fade.vue'
    export default {
        name: 'DetailBanner',
        components: {
            CommonGallery,
            AnimationFade
        },
        data() {
            return {
                showGallery: false
            }
        },
        props: {
            sightName: String,
            bannerImg: String,
            galleryImgs: Array
        },
        methods: {
            handleBannerClick() {
                this.showGallery = true
            },
            handleGalleryClose() {
                this.showGallery = false
            }
        }
    }
</script>

<style scoped lang="less">
    .banner {
        position: relative;
        height: 55vw;
        color: #fff;
        .banner-img {
            width: 100%;
        }
        .banner-info {
            position: absolute;
            bottom: .3rem;
            left: .2rem;
            font-size: .36rem;
            font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
            text-shadow: 0 1px 2px rgba(0, 0, 0, .7);
            z-index: 1;
        }
        .banner-imgicon {
            position: absolute;
            bottom: .8rem;
            left: .2rem;
            width: 1.2rem;
            height: .4rem;
            line-height: .4rem;
            background-color: rgba(0, 0, 0, .5);
            border-radius: .2rem;
            text-align: center;
            .icon-picfill {
                font-size: .24rem;
            }
        }
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: .6rem;
            background-image: linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,.8));
        }
    }
</style>
