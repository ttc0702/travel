<template>
    <div class="recommend">
        <div class="recommend-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="喜欢" class="title-icon">
            <span class="title">猜你喜欢</span>
        </div>
        <ul class="recommend-list">
            <router-link :class="['recommend-item', {'border-bottom': index < list.length - 1}]" v-for="(item, index) of list" :key="item.id" tag="li" :to="'/detail/' + item.id">
                <div class="item-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="item-tag" :style="'background-image:url(' + item.tagUrl + ')'">{{item.tagText}}</div>
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-comment">
                        <i class="iconfont">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</i>
                        <span class="comment">{{item.comment}}条评论</span>
                    </div>
                    <div class="item-price">
                        <span class="price">¥<em>{{item.price}}</em>
                        </span>起
                        <span class="location">{{item.location}}</span>
                    </div>
                    <div class="item-feature" v-if="item.feature !== ''">{{item.feature}}</div>
                </div>
            </router-link>
        </ul>
        <a class="recommend-more border-top" href="javascript:">查看所有产品</a>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        props: {
            list: Array
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/mixins.less';
    .recommend {
        margin-top: .2rem;
        background-color: #fff;
        .recommend-title {
            height: .92rem;
            line-height: .92rem;
            .title-icon {
                margin-left: .2rem;
                width: .3rem;
                vertical-align: baseline;
            }
            .title {
                font-size: .32rem;
            }
        }
        .recommend-list {
            margin-left: .2rem;
            .recommend-item {
                overflow: hidden;
                position: relative;
                padding-top: .2rem;
                padding-bottom: .2rem;
                .item-img {
                    float: left;
                    width: 2rem;
                    height: 2rem;
                    img {
                        width: 100%;
                    }
                }
                .item-tag {
                    position: absolute;
                    top: .2rem;
                    left: 0;
                    width: 1.1rem;
                    height: .36rem;
                    -webkit-background-size: cover;
                    background-size: cover;
                    color: #fff;
                    line-height: .36rem;
                    text-align: center;
                    font-size: .24rem;
                }
                .item-info {
                    overflow: hidden;
                    /*float: left;*/
                    padding-left: .22rem;
                    .item-title {
                        margin-top: .26rem;
                        font-size: .32rem;
                        line-height: .44rem;
                    }
                    .item-comment {
                        margin-top: .14rem;
                        height: .34rem;
                        .iconfont {
                            font-size: .24rem;
                            color: #ffb436;
                            vertical-align: top;
                        }
                        .comment {
                            margin-left: .12rem;
                            font-size: .24rem;
                            color: #666;
                        }
                    }
                    .item-price {
                        margin-top: .22rem;
                        height: .46rem;
                        .price {
                            color: #ff8300;
                            em {
                                font-size: .4rem;
                            }
                        }
                        .location {
                            float: right;
                            padding-top: .2rem;
                            padding-right: .2rem;
                            font-size: .24rem;
                            color: #666;
                        }
                    }
                    .item-feature {
                        max-width: 4rem;
                        display: inline-block;
                        margin-top: .48rem;
                        background-color: #fff9f9;
                        color: #f55;
                        font-size: .24rem;
                        padding: .04rem .1rem;
                        height: .34rem;
                        line-height: .36rem;
                        .ellipse;
                    }
                }
            }
        }
        .recommend-more {
            display: block;
            position: relative;
            font-size: .28rem;
            height: .8rem;
            line-height: .8rem;
            text-align: center;
        }
    }
</style>
