<template>
    <div class="location border-top">
        <div class="position iconfont border-right">
            <a href="javascript:" class="position-desc"> 附近</a>
        </div>
        <div class="list iconfont">
            <a href="javascript:" class="list-desc"> 必游榜单</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeLocation'
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/variables.less';
    .location {
        /*border-top: 1px solid #ddd;*/
        position: relative;
        height: 1rem;
        background-color: #fff;
        .position, .list {
            position: relative;
            float: left;
            box-sizing: border-box;
            width: 50%;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            a {
                color: @dark-text-color;
                font-size: .28rem;
            }
        }
        .position-desc:before {
            content: "\e7f3";
        }
        .list-desc:before {
            content: "\e8ce";
            color: #999;
        }
    }
</style>
