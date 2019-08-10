<template>
    <div id="app">
        <!--keep-alive 可以将加载过的路由中的内容存储到内存中，下一次再加载时不需要再重新渲染路由中的内容-->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    /*@import "http://at.alicdn.com/t/font_1309406_09pj6ax852k5.css";*/
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>
