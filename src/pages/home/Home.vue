<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-location></home-location>
        <home-hot :list="hotList"></home-hot>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import HomeLocation from './components/Location.vue'
    import HomeHot from './components/Hot.vue'
    import HomeRecommend from './components/Recommend.vue'
    import HomeWeekend from './components/Weekend.vue'

    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeLocation,
            HomeHot,
            HomeRecommend,
            HomeWeekend
        },
        data() {
            return {
                swiperList: [],
                iconList: [],
                hotList: [],
                recommendList: [],
                weekendList: [],
                lastCity: ''
            }
        },
        computed: {
            ...mapState(['city'])
        },
        methods: {
            getHomeInfo () {
                axios.get('api/index.json?city=' + this.city) // webpack-dev-server 提供了 proxy 代理功能，需要设置 config/index.js
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.hotList = data.hotList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            }
        },
        mounted () {
            this.lastCity = this.city
            this.getHomeInfo()
        },
        // 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
        activated() {
            if(this.lastCity !== this.city) {
                this.lastCity = this.city
                this.getHomeInfo()
            }
        }
    }
</script>

<style scoped lang="less">
    .home {
        background-color: #f5f5f5;
    }
</style>
