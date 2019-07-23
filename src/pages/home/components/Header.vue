<template>
    <div>
        <div class="header">
            <div class="header-left"><i class="iconfont iconback"></i></div>
            <div class="header-input">
                <i class="iconfont iconsearch"></i>
                输入城市/景点/游玩主题</div>
            <div class="header-right">
                城市
                <i class="iconfont iconunfold"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader'
    }
</script>

<style scoped lang="stylus">
    @import '~styles/variables.styl';
    .header
        display: flex;
        height: .88rem;
        line-height: .88rem;
        background-color: $bgColor;
        color: #fff;
        .header-left
            width: .42rem;
            float: left;
            margin-left: .2rem;
            .iconback
                font-size: .4rem;
        .header-input
            flex: 1;
            height: .64rem;
            line-height: .64rem;
            margin-top: .12rem;
            margin-left: .2rem;
            padding-left: .2rem;
            background-color: #fff;
            border-radius: .1rem;
            color: #ccc;
        .header-right
            width: 1.5rem;
            float: right;
            text-align: center;
</style>
