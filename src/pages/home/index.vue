<template>
    <!-- 首页轮播图 -->
    <HomeSwiper :swiperList="swiperList"/>

    <!-- 新品推荐 -->
    <HomeNewProduct :product="product" />

    <!-- 热卖单品 -->
    <HomeSelling :product="product" />

    <!-- 拼团促销 -->
    <HomeBulk :product="product" />

    <!-- 限时抢购 -->
    <HomeMoreProduct :product="product" />

    <!-- 更多发现 -->
    <HomeLike :product="product" />

    <view class="end">- END -</view>
</template>

<script lang="ts">
import { reactive } from 'vue'
import HomeSwiper from '../../components/HomeSwiper.vue'
import HomeNewProduct from '../../components/HomeNewProduct.vue'
import HomeSelling from '../../components/HomeSelling.vue'
import HomeBulk from '../../components/HomeBulk.vue'
import HomeMoreProduct from '../../components/HomeMoreProduct.vue'
import HomeLike from '../../components/HomeLike.vue'
import { Product, SwiperList } from '../../api/product'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeNewProduct,
    HomeSelling,
    HomeBulk,
    HomeMoreProduct,
    HomeLike
  },
  setup() {
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

    return {
        swiperList, product
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/mixin";

.home-page {
  @include wh(100%, 100%);
}

.end {
  font-size: 20px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(131, 131, 131, 1);
  width: 100%;
  text-align: center;
  padding: 60px 0;
}

</style>