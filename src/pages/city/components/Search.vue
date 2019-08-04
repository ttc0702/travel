<template>
    <div class="search">
        <div class="search-wrapper iconfont">
            <input class="search-input" type="text" placeholder="北京/beijing/bj" maxlength="50" v-model.trim="keyword">
        </div>
        <div class="search-content" ref="wrapper" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of results" :key="item.id"
                    @click="handleCityClick(item.name)">{{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import {mapMutations} from 'vuex'

    export default {
        name: 'CitySearch',
        data() {
            return {
                keyword: '',
                results: [],
                timer: null
            }
        },
        props: {
            cities: Object,
            citiesForeign: Object
        },
        computed: {
            hasNoData() {
                return !this.results.length
            }
        },
        methods: {
            handleCityClick(city) {
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        watch: {
            keyword() {
                if (this.keyword) {
                    // this.$refs.wrapper.style.zIndex = 1
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const results = []
                        for (let i in this.cities) {
                            this.cities[i].forEach((value) => {
                                if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                    results.push(value)
                                }
                            })
                        }
                        for (let i in this.citiesForeign) {
                            this.citiesForeign[i].forEach((value) => {
                                if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                    results.push(value)
                                }
                            })
                        }
                        this.results = results
                    }, 100)
                }
                // else {
                //     this.$refs.wrapper.style.zIndex = -1
                // }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {
                    mouseWheel: {
                        speed: 20,
                        invert: false,
                        easeTime: 300
                    },
                    scrollbar: {
                        fade: true,
                        interactive: false
                    },
                    click: true
                })
            })
        }
    }
</script>

<style scoped lang="less">
    .search {
        height: 1rem;
        display: flex;
        .search-wrapper {
            position: relative;
            flex: 1;
            padding: .18rem .3rem;
            background-color: #fff;
            .search-input {
                box-sizing: border-box;
                width: 100%;
                height: .64rem;
                padding: 0 .7rem;
                border-radius: .1rem;
                background-color: #eee;
                font-size: .28rem;
            }
        }
        .search-wrapper:before {
            font-size: .36rem;
            position: absolute;
            top: 50%;
            margin-top: -.18rem;
            left: .46rem;
            content: "\e65c";
            color: #bbb;
        }
        .search-content {
            overflow: hidden;
            position: absolute;
            top: 1.88rem;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            background-color: #eee;
            .search-item {
                height: .9rem;
                line-height: .9rem;
                margin: 0 .2rem;
            }
        }
    }

    .border-bottom {
        &:before, &:after {
            border-color: #ccc;
        }
    }
</style>
