<template>
    <view class="classify-page">
        <view class="cover" @click="routeGoodsList">
            <text>FLOWERS</text>
            <text>花礼</text>
            <view class="more">查看更多</view>
            <image class="cover-image" :src="product.cover" mode="aspectFill" />
        </view>
        <view class="insets">
            <view class="insets-item" v-for="item in product.productItem" :key="item.name" @click="routeGoodsDetail">
                <image class="insets-image" :src="item.url" mode="aspectFill" />
                <text>{{item.name}}</text>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { useClassify, Product } from '../assets/js/use_classify'

export default {
    name: 'ClassifyItem',
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    setup(props) {
        const { routeGoodsList, routeGoodsDetail } = useClassify()
        const product = props.product

        return { routeGoodsList, routeGoodsDetail, product }
    }
}
</script>

<style lang="scss">
@import "../assets/styles/mixin";

.cover {
  position: relative;
  width: 672px;
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 78px;

  text:first-child {
    font-size: 20px;
    font-family: PingFangSC-Thin;
    font-weight: 100;
    color: rgba(0, 0, 0, 1);
  }

  text:nth-child(2) {
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
  }

  .more {
    width: 128px;
    height: 48px;
    background: rgba(19, 53, 118, 1);
    font-size: 24px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
    text-align: center;
    margin-top: 24px;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}

.insets {
  width: 670px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;

  .insets-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .insets-image {
      width: 120px;
      height: 120px;
      margin-bottom: 12px;
    }

    text {
      font-size: 24px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(131, 131, 131, 1);
    }
  }
}

</style>