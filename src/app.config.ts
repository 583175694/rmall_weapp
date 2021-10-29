export default {
    pages: [
        'pages/home/index',
        'pages/index/index',
        'pages/classify/index',
        'pages/cart/index',
        'pages/mine/index'
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        backgroundColor: "#fff",
        selectedColor: "#133576",
        color: "#303030",
        borderStyle: "black",
        list: [
            {
                pagePath: "pages/home/index",
                iconPath: "./assets/icon/icon_home_nol.png",
                selectedIconPath: "./assets/icon/icon_home_sel.png",
                text: "首页"
            },
            {
                pagePath: "pages/classify/index",
                iconPath: "./assets/icon/icon_cate_nol.png",
                selectedIconPath: "./assets/icon/icon_cate_sel.png",
                text: "分类"
            },
            {
                pagePath: "pages/cart/index",
                iconPath: "./assets/icon/icon_shop_nol.png",
                selectedIconPath: "./assets/icon/icon_shop_sel.png",
                text: "购物车"
            },
            {
                pagePath: "pages/mine/index",
                iconPath: "./assets/icon/icon_mine_nol.png",
                selectedIconPath: "./assets/icon/icon_mine_sel.png",
                text: "我的"
            }
        ]
    }
}
