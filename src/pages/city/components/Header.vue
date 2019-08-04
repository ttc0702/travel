<template>
    <div class="header">
        <router-link to="/" class="header-back iconfont icon-back"></router-link>
        <h1 class="header-title">城市选择</h1>
    </div>
</template>

<script>
    export default {
        name: 'CityHeader',
        data() {
            return {
                active: true
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/variables';
    .header {
        position: relative;
        height: .88rem;
        background-color: @bg-color;
        color: #fff;
        .header-back, .header-title {
            height: .88rem;
            line-height: .88rem;
            text-align: center;
        }
        .header-back {
            position: absolute;
            top: 0;
            left: 0;
            width: .8rem;
            font-size: .4rem;
            color: #fff;
        }
        .header-title {
            font-size: .32rem;
        }
    }
</style>
