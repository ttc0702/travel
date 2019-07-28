// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 解决移动端300毫秒点击延迟问题
import fastClick from 'fastclick'

// 统一各品牌手机的默认样式
import 'styles/reset.css'
// 解决移动端一像素边框问题（通过 transform: scale）
import 'styles/border.css'

// import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper/*, { default global options } */)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
