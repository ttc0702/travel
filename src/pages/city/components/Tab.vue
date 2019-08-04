<template>
    <ul class="tab">
        <li class="tab-demostic" @click="handleDemosticClick">国内</li>
        <li class="tab-foreign" @click="handleForeignClick">国际/地区</li>
        <li :class="['tab-scrollbar', {'demostic': active}, {'foreign': !active}]"></li>
    </ul>
</template>

<script>
    export default {
        name: 'CityTab',
        data() {
            return {
                active: true
            }
        },
        methods: {
            handleDemosticClick() {
                this.active = true
                this.$emit('active', this.active)
            },
            handleForeignClick() {
                this.active = false
                this.$emit('active', this.active)
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/styles/variables';
    .tab {
        position: relative;
        height: .84rem;
        background-color: #fff;
        .tab-demostic, .tab-foreign {
            width: 50%;
            height: .84rem;
            line-height: .84rem;
            float: left;
            text-align: center;
            font-size: .32rem;
        }
        .tab-scrollbar {
            position: absolute;
            top: .76rem;
            width: 50%;
            height: .08rem;
            background-color: @bg-color;
        }
    }
    .demostic {
        left: 0;
    }
    .foreign {
        left: 50%;
    }
</style>
