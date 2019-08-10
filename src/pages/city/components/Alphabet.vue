<template>
    <div class="alphabet" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
        <ul class="alphabet-demostic" v-if="active">
            <li class="item" ref="current">当前</li>
            <li class="item">热门</li>
            <li class="item" v-for="item of letters" :key="item">{{item}}</li>
        </ul>
        <ul class="alphabet-foreign" v-else>
            <li class="item" ref="current">当前</li>
            <li class="item">热门</li>
            <li class="item" v-for="item of letters" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        data () {
            return {
                touchStatus: false,
                startY: 0,
                timer: null // 用于函数节流
            }
        },
        updated() {
            this.startY = this.$refs.current.offsetTop
        },
        computed: {
            letters () {
                const letters = []
                if(this.active) {
                    for (let i in this.cities) {
                        letters.push(i)
                    }
                } else {
                    for (let i in this.citiesForeign) {
                        letters.push(i)
                    }
                }
                return letters
            }
        },
        props: {
            cities: Object,
            citiesForeign: Object,
            active: Boolean
        },
        methods: {
            handleLetterClick(e) {
                let letter = e.target.innerText
                if (letter === '当前') {
                    letter = 'current'
                } else if (letter === '热门') {
                    letter = 'hot'
                }
                this.$emit('change', letter)
            },
            handleTouchStart() {
                this.touchStatus = true
            },
            handleTouchMove(e) {
                if (this.touchStatus) {
                    // 利用定时器实现函数节流：
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 123
                        const index = Math.floor((touchY - this.startY) / 16)
                        let letter = ''
                        if (index === 0) {
                            letter = 'current'
                        } else if (index === 1) {
                            letter = 'hot'
                        } else {
                            letter = this.letters[index - 2]
                        }
                        this.$emit('change', letter)
                    }, 16)
                }
            },
            handleTouchEnd() {
                this.touchStatus = false
            }
        }
    }
</script>

<style scoped lang="less">
    .alphabet {
        position: absolute;
        top: 2.46rem;
        right: 0;
        width: .52rem;
        padding: .26rem 0;
        background-color: rgba(100, 100, 100, .1);
        border-radius: .26rem;
        color: #079fde;
        font-size: .24rem;
        .item {
            /*height: .32rem;*/
            line-height: .32rem;
            text-align: center;
        }
    }
</style>
