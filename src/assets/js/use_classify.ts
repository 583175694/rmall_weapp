import Taro from '@tarojs/taro'
import { reactive } from 'vue'

export interface Product {
    cover: string
    name: string
    english: string
    productItem: ProductItem[]
}

interface ProductItem {
    name: string
    url: string
}

export function useClassify() {
    const product = reactive([{
        cover: require('../../assets/img/flower-10.png'),
        name: '花礼',
        english: '',
        productItem: [{
            name: '商品名称',
            url: require('../../assets/img/insets-1.png')
        }, {
            name: '商品名称',
            url: require('../../assets/img/insets-2.png')
        }, {
            name: '商品名称',
            url: require('../../assets/img/insets-3.png')
        }, {
            name: '商品名称',
            url: require('../../assets/img/insets-4.png')
        }]
    }, {
        cover: require('../../assets/img/flower-10.png'),
        name: '花礼',
        english: '',
        productItem: [{
            name: '商品名称',
            url: require('../../assets/img/insets-1.png')
        }, {
            name: '商品名称',
            url: require('../../assets/img/insets-2.png')
        }, {
            name: '商品名称',
            url: require('../../assets/img/insets-3.png')
        }, {
            name: '商品名称',
            url: require('../../assets/img/insets-4.png')
        }]
    }])

    function routeGoodsList() {
        Taro.navigateTo({
            url: '../goodsList/index'
        })
    }

    function routeGoodsDetail() {
        Taro.navigateTo({
            url: '../goodsDetails/index'
        })
    }

    return { product, routeGoodsList, routeGoodsDetail }
}