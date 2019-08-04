<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="header-left">
                <i class="iconfont icon-back"></i>
            </div>
            <div class="header-input">
                <i class="iconfont icon-search"></i>
                输入城市/景点/游玩主题
            </div>
            <router-link to="/city">
                <div class="header-right">
                    {{city}}
                    <i class="iconfont icon-unfold"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    // console.dir(mapState(['city']))
    export default {
        name: 'HomeHeader',
        computed: {
            ...mapState(['city'])
        }
    }
</script>

<style scoped lang="less">
    /*简化路径需要配置 webpack.base.config.js*/
    @import '../../../assets/styles/variables.less';
    .header {
        height: .88rem;
        .header-wrapper {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 10;
            display: flex;
            height: .88rem;
            line-height: .88rem;
            background: @bg-color;
            color: #fff;
            .header-left {
                width: .42rem;
                float: left;
                margin-left: .2rem;
                .icon-back {
                    font-size: .4rem;
                }
            }
            .header-input {
                flex: 1;
                height: .64rem;
                line-height: .64rem;
                margin-top: .12rem;
                margin-left: .2rem;
                padding-left: .2rem;
                background-color: #fff;
                border-radius: .1rem;
                color: #ccc;
            }
            .header-right {
                padding: 0 .12rem;
                float: right;
                color: #fff;
            }
        }
    }
</style>
