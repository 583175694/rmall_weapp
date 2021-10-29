<template>
    <view class="more-product">
        <view class="title">
            <text>更多发现</text>
            <text>Find more</text>
        </view>
        <view class="large" v-for="item in product.productList" :key="item.title">
            <image class="product-cover" :src="item.cover" mode="aspectFill" />
            <view class="product-info">
            <text>插花篇|花瓶插花养护小知识</text>
            <text>2018.10.2</text>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { useProduct } from '../assets/js/use_home'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomeMoreProduct',
    setup() {
        const { product } = useProduct()

        return { product }
    }
})
</script>

<style lang="scss">
@import "../assets/styles/mixin";

.more-product {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 26px;

    text:first-child {
      font-size: 40px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(48, 48, 48, 1);
      line-height: 56px;
      margin-top: 60px;
      margin-bottom: 8px;
    }

    text:last-child {
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(19, 53, 118, 1);
      line-height: 26px;
      letter-spacing: 12px;
    }
  }

  .large {
    width: 670px;
    height: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 60px;

    .product-cover {
      width: 670px;
      height: 444px;
    }

    .product-info {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      text:first-child {
        font-size: 32px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        margin-top: 16px;
      }

      text:last-child {
        font-size: 24px;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}

</style>