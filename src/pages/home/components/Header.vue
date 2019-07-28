<template>
    <div>
        <div class="header">
            <div class="header-left"><i class="iconfont icon-back"></i></div>
            <div class="header-input">
                <i class="iconfont icon-search"></i>
                输入城市/景点/游玩主题</div>
            <div class="header-right">
                {{this.city}}
                <i class="iconfont icon-unfold"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props: {
            city: String
        }
    }
</script>

<style scoped lang="less">
    /*简化路径需要配置 webpack.base.config.js*/
    @import '../../../assets/styles/variables.less';
    .header {
        display: flex;
        height: .88rem;
        line-height: .88rem;
        background: @bg-color;
        color: #fff;
        .header-left {
            width: .42rem;
            float: left;
            margin-left: .2rem;
            .iconback {
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
            width: 1.5rem;
            float: right;
            text-align: center;
        }
    }
</style>
