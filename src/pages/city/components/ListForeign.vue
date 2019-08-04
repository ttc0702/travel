<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area" ref="current">
                <div class="title border-topbottom">当前</div>
                <ul class="button-list">
                    <li class="button-wrapper">
                        <div class="button">{{currentCity}}</div>
                    </li>
                </ul>
            </div>
            <div class="area" ref="hot">
                <div class="title border-topbottom">热门</div>
                <ul class="button-list">
                    <li class="button-wrapper" v-for="item of hotCitiesForeign" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="area" v-for="(value, key) of citiesForeign" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li v-for="item of value" :key="item.id" class="item border-bottom" @click="handleCityClick(item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import {mapState, mapMutations} from 'vuex'
    export default {
        name: 'CityList',
        props: {
            hotCitiesForeign: Array,
            citiesForeign: Object,
            letter: String
        },
        methods: {
            ...mapMutations(['changeCity']),
            handleCityClick(city) {
                this.changeCity(city)
                this.$router.push('/')
            }
        },
        computed: {
            ...mapState({currentCity: 'city'})
        },
        watch: {
            letter() {
                if (this.letter) {
                    const ref = this.$refs[this.letter]
                    const element = ref[0] === undefined ? ref : ref[0]
                    this.scroll.scrollToElement(element)
                }
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
    .list {
        overflow: hidden;
        position: absolute;
        top: 2.72rem;
        right: 0;
        bottom: 0;
        left: 0;
        /*width: 100%;*/
        color: #666;
        background-color: #eee;
        .area {
            .title {
                height: .5rem;
                line-height: .5rem;
                padding-left: .2rem;
                font-size: .24rem;
                color: #333;
            }
            .button-list {
                padding: 0 .4rem .2rem .2rem;
                overflow: hidden;
                background-color: #fff;
                .button-wrapper {
                    float: left;
                    box-sizing: border-box;
                    width: 33.33%;
                    padding: .2rem .2rem 0 0;
                    height: .92rem;
                }
                .button {
                    width: 100%;
                    height: .68rem;
                    line-height: .68rem;
                    border: 1px solid #ddd;
                    border-radius: .1rem;
                    text-align: center;
                }
            }
            .item-list {
                overflow: hidden;
                background-color: #fff;
                .item {
                    height: .9rem;
                    line-height: .9rem;
                    margin: 0 .6rem 0 .2rem;
                }
            }
        }
    }
    .border-topbottom {
        &:before, &:after {
            border-color: #ddd;
        }
    }
    .border-bottom {
        &:before, &:after {
            border-color: #ccc;
        }
    }
</style>
