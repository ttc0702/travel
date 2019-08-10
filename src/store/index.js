import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    // actions: { // 用于处理异步操作，或者批量处理同步操作
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations,
    getters: {
        // doubleCity(state) {
        //     return state.city + ' ' + state.city
        // }
    } // 类似组件中的 computed
})
