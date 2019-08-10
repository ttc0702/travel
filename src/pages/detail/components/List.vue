<template>
    <ul class="list">
        <li class="item" v-for="(item, index) of list" :key="index" v-show="index < 2 || !item.icon || showItem">
            <div class="item-info border-bottom">
                <i class="item-icon" v-if="item.iconUrl" :style="'background-image: url(' + item.iconUrl + ')'"></i>
                <span class="item-title">{{item.title}}</span>
                <span class="item-right">
                    <span class="item-price" v-if="item.price">
                        <span class="price">
                            ¥<em>{{item.price}}</em>
                        </span><span class="qi" v-if="item.children">起</span>
                    </span>
                    <i class="iconfont icon-unfold" v-if="item.icon" @click="handleClickRight"></i>
                </span>
            </div>
            <detail-list :list="item.children" v-if="item.children"></detail-list>
        </li>
        <li class="more" v-if="list.length > 2 && list[1]['icon']" @click="handleClickMore">
            查看剩余产品
            <i class="iconfont icon-unfold"></i>

        </li>
    </ul>
</template>

<script>
    export default {
        name: 'DetailList',
        props: {
            list: Array
        },
        data() {
            return {
                showItem: false
            }
        },
        methods: {
            handleClickRight(e) {
                let tar = e.target
                let ele = tar.parentNode.parentNode.nextElementSibling
                if (tar.className === 'iconfont icon-unfold') {
                    tar.className = 'iconfont icon-fold'
                    if (ele) {
                        ele.style.display = 'block'
                    }
                } else {
                    tar.className = 'iconfont icon-unfold'
                    if (ele) {
                        ele.style.display = 'none'
                    }
                }
            },
            handleClickMore() {
                this.showItem = true
            }
        }
    }
</script>

<style scoped lang="less">
    .list {
        .item {
            margin-top: .2rem;
            background-color: #fff;
            .item-info {
                position: relative;
                top: 0;
                left: 0;
                height: .92rem;
                line-height: .92rem;
                margin: 0 .2rem;
                .item-title {
                    font-size: .32rem;
                }
                .item-icon {
                    display: inline-block;
                    width: .36rem;
                    height: .36rem;
                    vertical-align: middle;
                    background-size: .4rem 3rem;
                    background-repeat: no-repeat;
                    background-position: 0 -.45rem;
                }
                .item-right {
                    position: absolute;
                    top: 0;
                    right: .2rem;
                }
                .item-price {
                    font-size: .24rem;
                    color: rgb(158, 158, 158);
                    .price {
                        color: #ff9800;
                        em {
                            font-size: .4rem;
                        }
                    }
                    .qi {
                        display: inline-block;
                        transform: scale(.8);
                    }
                }
                .iconfont {
                }
            }
            .list {
                .item {
                    margin-top: 0;
                    .item-info {
                        margin: 0;
                        padding: 0 .2rem;
                        .item-title {
                            font-size: .28rem;
                        }
                    }
                    .list {
                        display: none;
                        .item-info {
                            background-color: #eee;
                            height: 1.2rem;
                            line-height: 1.2rem;
                            .item-title {
                                display: block;
                                height: 1.2rem;
                                line-height: .6rem;
                                width: 70%;
                            }
                        }
                    }
                }
            }
            .more {
                height: .92rem;
                line-height: .92rem;
                text-align: center;
            }
        }
    }

    .border-bottom {
        &:before, &:after {
            border-color: #ccc;
        }
    }
</style>
