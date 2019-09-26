<template>
    <div
        class="alphabet"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="throttle(handleTouchMove, 50, $event)"
        @touchend="handleTouchEnd"
    >
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
            // 页面初始渲染时没有数据，ajax 获取到数据时触发 updated
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
                // 利用定时器实现函数节流：
                // if (this.timer) return
                // this.timer = setTimeout(() => {
                    if (this.touchStatus) {
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
                        // this.timer = null
                    }
                // }, 50)
            },

            // 利用定时器实现函数节流：
            throttle(func, delay, e) {
                if (this.timer) return
                this.timer = setTimeout(() => {
                    func.call(this, e)
                    this.timer = null
                }, delay)
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
    width: 0.52rem;
    padding: 0.26rem 0;
    background-color: rgba(100, 100, 100, 0.1);
    border-radius: 0.26rem;
    color: #079fde;
    font-size: 0.24rem;
    .item {
        /*height: .32rem;*/
        line-height: 0.32rem;
        text-align: center;
    }
}
</style>
