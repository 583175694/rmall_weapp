<template>
    <view class="selling">
        <view class="title">
            <text>热卖单品</text>
            <text>Best Sellers</text>
        </view>
        <scroll-view class="insets" scrollX="true">
            <view class="insets-block" v-for="item in product.productList" :key="item.title">
                <view class="insets-list">
                    <image class="product-cover" :src="item.cover" mode="aspectFill" />
                    <text>{{item.title}}</text>
                    <text>{{item.describe}}</text>
                    <text>￥{{item.price}}.00</text>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProduct } from '../assets/js/use_home'
export default defineComponent({
    name: 'HomeSelling',
    setup() {
        const { product } = useProduct()

        return { product }
    }
})
</script>

<style lang="scss">
@import "../assets/styles/mixin";

.selling {
  @include wh(100%, 100%);
}

.selling {
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

  .insets {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    white-space: nowrap;
    margin-top: 24px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    .insets-block {
      width: 278px;
      display: inline-block;
      margin-right: 24px;

      .insets-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .product-cover {
          width: 280px;
          height: 320px;
        }

        text:first-of-type {
          font-size: 28px;
          color: rgba(56, 56, 56, 1);
          margin-top: 16px;
          font-weight:500;
        }

        text:nth-of-type(2) {
          font-size: 24px;
          color: rgba(156, 156, 156, 1);
          margin-top: 4px;
        }

        text:last-of-type {
          font-size: 24px;
          font-family: ArialMT;
          color: rgba(0, 0, 0, 1);
          margin-top: 16px;
        }
      }

    }
    .insets-block:first-child {
      margin-left: 40px;
    }

    .insets-block:last-child {
      margin-right: 40px;
    }
  }
}
</style>