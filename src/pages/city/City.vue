<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities="cities" :citiesForeign="citiesForeign"></city-search>
        <city-tab @active="handleActiveChange"></city-tab>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter" v-if="active"></city-list>
        <city-list-foreign :hotCitiesForeign="hotCitiesForeign" :citiesForeign="citiesForeign" :letter="letter" v-else></city-list-foreign>
        <city-alphabet :cities="cities" :citiesForeign="citiesForeign" @change="handleLetterChange" :active="active"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/Header.vue'
    import CitySearch from './components/Search.vue'
    import CityTab from './components/Tab.vue'
    import CityList from './components/List.vue'
    import CityListForeign from './components/ListForeign.vue'
    import CityAlphabet from './components/Alphabet.vue'

    import axios from 'axios'

    export default {
        name: 'City',
        components: {
            CityHeader,
            CitySearch,
            CityTab,
            CityList,
            CityListForeign,
            CityAlphabet
        },
        data () {
            return {
                hotCities: [],
                cities: {},
                hotCitiesForeign: [],
                citiesForeign: {},
                letter: '',
                active: true
            }
        },
        methods: {
            getCityInfo () {
                axios.get('api/city.json') // webpack-dev-server 提供了 proxy 代理功能，需要设置 config/index.js
                    .then(this.getCityInfoSucc)
            },
            getCityInfoSucc (res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                    this.hotCitiesForeign = data.hotCitiesForeign
                    this.citiesForeign = data.citiesForeign
                }
            },
            handleLetterChange(letter) {
                this.letter = letter
            },
            handleActiveChange(active) {
                this.active = active
            }
        },
        mounted () {
            this.getCityInfo()
        }
    }
</script>

<style scoped lang="less">
    .city {
    }
</style>
