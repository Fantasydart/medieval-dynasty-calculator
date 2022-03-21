import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [{
                name: 'stoneKnife',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'stoneKnife.webp',
                ingredient: { stone: 2, branch: 5 }
            },
            {
                name: 'woodenHammer',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'woodenHammer.webp',
                ingredient: { log: 1, branch: 10 }
            },
            {
                name: 'stoneAxe',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'stoneAxe.webp',
                ingredient: { stone: 2, branch: 10 }
            },
            {
                name: 'stonePick',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'stonePick.webp',
                ingredient: { stone: 4, log: 1 }
            },
            {
                name: 'woodenShovel',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'woodenShovel.webp',
                ingredient: { log: 2 }
            },
            {
                name: 'stoneSpear',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'stoneSpear.webp',
                ingredient: { log: 1 }
            },
            {
                name: 'simpleTorch',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'simpleTorch.webp',
                ingredient: { branch: 1, straw: 10 }
            },
            {
                name: 'woodenHoe',
                cost: {
                    buy: 30,
                    sell: 15
                },
                img: 'woodenHoe.webp',
                ingredient: { branch: 5, log: 1 }
            },
        ],
        resources: {
            stone: {
                name: 'stone',
                cost: {
                    buy: 0.3,
                    sell: 0.1
                },
                ingredient: null
            },
            branch: {
                name: 'branch',
                cost: {
                    buy: 0.3,
                    sell: 0.1
                },
                ingredient: null
            },
            log: {
                name: 'log',
                cost: {
                    buy: 30,
                    sell: 15
                },
                ingredient: null
            },
            straw: {
                name: 'straw',
                cost: {
                    buy: 30,
                    sell: 15
                },
                ingredient: null
            }
        },
        languages: [
            'ru', 'en'
        ]
    },
    mutations: {},
    actions: {
        getState(state) {
            return state;
        }
    },
    modules: {}
})