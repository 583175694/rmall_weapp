import { Product, SwiperList } from '../../api/product';
import { reactive, ref } from 'vue'

export function useSwiper() {
    const swiperList: Array<SwiperList> = reactive([{
        url: require('../../assets/img/flower_1.jpg')
    }, {
        url: require('../../assets/img/flower_2.jpg')
    }, {
        url: require('../../assets/img/flower_3.jpg')
    }, {
        url: require('../../assets/img/flower_4.jpg')
    }, {
        url: require('../../assets/img/flower_5.jpg')
    }])

    const current = ref(0)

    function onTabClick(e) {
        current.value = e.detail.current
    }

    function onChangeSwiper(e) {
        current.value = e.detail.current
    }

    return {
        swiperList, current, onTabClick, onChangeSwiper
    }
}

export function useProduct() {
    const product: Product = reactive({
        cover: require('../../assets/img/flower_6.jpg'),
        title: '商品名称',
        describe: '商品描述一句话商品描述',
        price: 680,
        productList: [{
            cover: require('../../assets/img/flower_1.jpg'),
            title: '商品名称',
            describe: '商品描述一句话商品描述',
            price: 288,
        }, {
            cover: require('../../assets/img/flower_2.jpg'),
            title: '商品名称',
            describe: '商品描述一句话商品描述',
            price: 288,
        }, {
            cover: require('../../assets/img/flower_3.jpg'),
            title: '商品名称',
            describe: '商品描述一句话商品描述',
            price: 288,
        }]
    })

    return { product }
}