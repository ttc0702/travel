<template>
    <transition name="fade">
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: 'Fade'
    }
</script>

<style scoped lang="less">
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
</style>
