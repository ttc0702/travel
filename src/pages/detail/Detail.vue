<template>
    <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :galleryImgs="galleryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner.vue'
    import DetailHeader from './components/Header.vue'
    import DetailList from './components/List.vue'

    import axios from 'axios'

    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data() {
            return {
                sightName: '',
                bannerImg: '',
                galleryImgs: [],
                list: []
            }
        },
        methods: {
            getDetailInfo () {
                axios.get('api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }) // webpack-dev-server 提供了 proxy 代理功能，需要设置 config/index.js
                    .then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc (res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.galleryImgs = data.galleryImgs
                    this.list = data.categoryList
                }
            }
        },
        // mounted () {
        //     this.getDetailInfo()
        // },
        activated() {
            this.getDetailInfo()
        }
    }
</script>

<style scoped lang="less">
    .detail {
        background-color: #f5f5f5;
    }
</style>
