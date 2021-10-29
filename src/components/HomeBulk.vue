<template>
    <view class="bulk">
        <view class="title">
            <text>拼团促销</text>
            <text>sales promotio</text>
        </view>
        <view class="large">
            <image class="product-cover" :src="product.cover" mode="aspectFill" />
            <view class="product-info">
                <view class="product-left">
                    <text>{{product.title}}</text>
                    <view class="price">
                    <text>￥{{product.price}}</text>
                    <text class="text-small">.00</text>
                    <text>三人团</text>
                    <text>￥{{product.price}}.00</text>
                    </view>
                </view>
                <view class="button">
                    <text>我要拼团</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { useProduct } from '../assets/js/use_home'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomeBulk',
    setup() {
        const { product } = useProduct()

        return { product }
    }
})
</script>

<style lang="scss">
@import "../assets/styles/mixin";

.bulk {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

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
    height: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 26px;

    .product-cover {
      width: 670px;
      height: 444px;
    }

    .product-info {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 16px;

      .product-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        text:first-child {
          font-size: 28px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          color: rgba(48, 48, 48, 1);
        }

        .price {
          display: flex;
          align-items: flex-end;

          text {
            vertical-align: bottom;
          }

          text:first-of-type {
            font-size: 32px;
            font-family: Arial-BoldMT;
            font-weight: normal;
            color: rgba(227, 106, 82, 1);
            line-height: 35rpx;
          }

          text:nth-of-type(2) {
            font-size: 20px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: rgba(227, 106, 82, 1);
          }

          text:nth-of-type(3) {
            font-size: 20px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: rgba(48, 48, 48, 1);
            padding: 6px 10px;
            border: 2px solid rgba(227, 106, 82, 1);
            margin-left: 12px;
          }

          text:nth-of-type(4) {
            font-size: 24px;
            font-family: ArialMT;
            color: rgba(131, 131, 131, 1);
            text-decoration: line-through;
            margin-left: 12px;
          }
        }
      }

      .button {
        width: 164px;
        height: 60px;
        background: rgba(43, 43, 43, 1);
        font-size: 24px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
        text-align: center;
      }
    }
  }
}
</style>