// 产品列表
export interface ProductList {
    cover: string
    title: string
    describe: string
    price: number
}

// 产品
export interface Product {
    cover: string
    title: string
    describe: string
    price: number
    productList: ProductList[]
}

// 产品轮播图
export interface SwiperList {
    url: string
}