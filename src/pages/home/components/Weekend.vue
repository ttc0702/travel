<template>
    <div class="weekend">
        <div class="weekend-title">周末去哪儿</div>
        <ul class="weekend-list">
            <li class="weekend-item" v-for="item of list" :key="item.id">
                <a href="javascript:">
                    <img class="weekend-img" :src="item.imgUrl" alt="">
                    <div class="weekend-info">
                        <p class="weekend-name">{{item.title}}</p>
                        <p class="weekend-desc">{{item.desc}}</p>
                    </div>
                </a>
            </li>
        </ul>
        <div class="price-desc">
            <span class="iconfont icon-warn"></span>
            <strong>票面价</strong>是指通过景区指定窗口售卖的纸质门票上标注的价格
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Weekend',
        props: {
            list: Array
        }
    }
</script>

<style scoped lang="less">
    .weekend {
        margin-top: .2rem;
        .weekend-title {
            height: 1rem;
            line-height: 1rem;
            padding-left: .2rem;
            font-size: .32rem;
            background-color: #fff;
        }
        .weekend-list {
            background-color: #fff;
            .weekend-item {
                a {
                    color: #222;
                    .weekend-img {
                        width: 100%;
                    }
                    .weekend-info {
                        height: .9rem;
                        padding: .2rem;
                        .weekend-name {
                            height: .48rem;
                            line-height: .48rem;
                        }
                        .weekend-desc {
                            height: .42rem;
                            line-height: .42rem;
                            font-size: .24rem;
                            color: #666;
                        }
                    }
                }
            }
        }
        .price-desc {
            height: .32rem;
            line-height: .32rem;
            margin-top: .1rem;
            padding: .14rem;
            font-size: .24rem;
            background-color: #fff;
            .iconfont {
                font-size: .24rem
            }
            strong {
                font-weight: bold;
            }
        }
    }
</style>
