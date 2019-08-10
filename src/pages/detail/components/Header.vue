<template>
    <div class="header">
        <router-link tag="i" to="/" class="header-abs iconfont icon-back" v-show="showAbs">
            <!--<i class="iconfont icon-back"></i>-->
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="{'opacity': opacity}">
            <router-link tag="i" to="/" class="header-left iconfont icon-back"></router-link>
            <h1 class="header-title">北京欢乐谷</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailHeader',
        data() {
            return {
                showAbs: true,
                opacity: 0
            }
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrollTop
                this.showAbs = top < 30
                const opacity = (top - 30) / 80
                this.opacity = opacity > 1 ? 1 : opacity
            }
        },
        activated() {
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated() {
            window.removeEventListener('scroll', this.handleScroll) // 解绑全局事件
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/variables.less';

    .header {
        .header-abs {
            position: absolute;
            left: .1rem;
            top: .1rem;
            width: .72rem;
            height: .72rem;
            line-height: .72rem;
            text-align: center;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, .5);
            color: #eee;
            font-size: .4rem;
        }
        .header-fixed {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            height: .88rem;
            line-height: .88rem;
            background: @bg-color;
            color: #fff;
            text-align: center;
            z-index: 10;
            .header-left {
                position: absolute;
                left: 0;
                top: 0;
                width: .8rem;
                height: .88rem;
                line-height: .88rem;
                font-size: .4rem;
                text-align: center;
            }
            .header-title {
                height: .88rem;
                line-height: .88rem;
                font-size: .32rem;
            }
        }
    }
</style>
