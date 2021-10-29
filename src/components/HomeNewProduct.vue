<template>
    <view class="new-product">
        <view class="title">
            <text>新品推荐</text>
            <text>New Product</text>
        </view>
        <view class="large">
            <image class="product-cover" :src="product.cover" mode="aspectFill" />
            <view class="product-info">
            <text>{{product.title}}</text>
            <text>{{product.describe}}</text>
            <view class="price">
                <text>￥{{product.price}}</text>
                <text class="text-small">.00</text>
            </view>
            </view>
        </view>
        <view class="insets">
            <view v-for="item in product.productList" class="insets-list" :key="item.title">
                <image class="product-cover" :src="item.cover" mode="aspectFill" />
                <text>{{item.title}}</text>
                <text>{{item.describe}}</text>
                <text>￥{{item.price}}.00</text>
            </view>
        </view>

    </view>
</template>

<script lang="ts">
import { useProduct } from '../assets/js/use_home'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomeNewProduct',
    setup() {
        const { product } = useProduct()

        return { product }
    }
})
</script>

<style lang="scss">
.new-product {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

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
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 26px;

    .product-cover {
      width: 670px;
      height: 444px;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 16px;

      text:first-child {
        font-size: 28px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(56, 56, 56, 1);
      }

      text:nth-child(2) {
        font-size: 24px;
        color: rgba(156, 156, 156, 1);
      }

      .price {
        text:first-child {
          font-size: 28px;
          font-family: ArialMT;
          color: rgba(0, 0, 0, 1);
          margin-top: 16px;
        }

        text:last-child {
          font-size: 20px;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  .insets {
    width: 670px;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;

    .insets-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .product-cover {
        width: 214px;
        height: 224px;
      }

      text:first-of-type {
        font-size: 28px;
        color: rgba(48, 48, 48, 1);
        margin-top: 16px;
        font-weight: 500;
      }

      text:nth-of-type(2) {
        font-size: 18px;
        color: rgba(131, 131, 131, 1);
        margin-top: 0px;
      }

      text:last-of-type {
        font-size: 24px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        margin-top: 16px;
      }
    }
  }
}
</style>