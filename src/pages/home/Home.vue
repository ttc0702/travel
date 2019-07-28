<template>
    <div class="home">
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-location></home-location>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header.vue'
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import HomeLocation from './components/Location.vue'
    import HomeRecommend from './components/Recommend.vue'
    import HomeWeekend from './components/Weekend.vue'

    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeLocation,
            HomeRecommend,
            HomeWeekend
        },
        data() {
            return {
                city: '',
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        methods: {
            getHomeInfo () {
                axios.get('/api/index.json') // webpack-dev-server 提供了 proxy 代理功能，需要设置 config/index.js
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
                console.log(res)
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.city = data.city
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            }
        },
        mounted () {
            this.getHomeInfo()
        }
    }
</script>

<style scoped lang="less">
    .home {
        background-color: #f5f5f5;
    }
</style>
