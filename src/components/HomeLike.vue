<template>
    <view class="guess-you-like">
        <view class="title">
            <text>限时抢购</text>
            <text>Flash sale</text>
        </view>
        <view class="row">
            <view class="subtitle">
                <text>限时购</text>
            </view>
            <view class="deadline">
                <text>12</text>:<text>60</text>:<text>60</text>
            </view>
            <view class="more">
                <text>更多</text>
                <view class="more-icon"></view>
            </view>
        </view>
        <view class="insets">
            <view class="insets-list" v-for="item in product.productList" :key="item.title">
                <image class="product-cover" :src="item.cover" mode="aspectFill" />
                <view class="price">
                    <text>￥{{item.price}}</text>
                    <text>￥{{item.price}}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { useProduct } from '../assets/js/use_home'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomeLike',
    setup() {
        const { product } = useProduct()

        return { product }
    }
})
</script>

<style lang="scss">
@import "../assets/styles/mixin";

.guess-you-like {
  display: flex;
  flex-direction: column;
  align-items: center;
    .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text:first-child {
      font-size:40px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(48,48,48,1);
      line-height:56px;
      margin-top: 60px;
      margin-bottom: 8px;
    }
    text:last-child {
      font-size:18px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(19,53,118,1);
      line-height:26px;
      letter-spacing:12px;
    }
  }
  .row {
    width: 670px;
    padding: 0 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 42px;
    .subtitle {
      text {
        font-size:36px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(48,48,48,1);
      }
    }
    .deadline {
      color:rgba(0,0,0,1);
      display: flex;
      align-items: center;
      // margin-left: 16px;
      text {
        display: inline-block;
        width:36px;
        height:36px;
        background:rgba(0,0,0,1);
        border-radius:4px;
        font-size:24px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height: 36px;
        text-align: center;
        margin: 0 6px;
      }
    }
    .more {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: flex-end;
      text {
        font-size:28px;
        font-weight:400;
        color:rgba(48,48,48,1);
      }
      .more-icon {
        width:22px;
        height:22px;
        background-image: url('../assets/icon/icon_right.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 7px;
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
      align-items: center;
      .product-cover {
        width:200px;
        height:200px;
        border-radius:4px;
        border:1px solid rgba(153,153,153,1);
      }
      .price {
        display: flex;
        align-items: center;
        margin-top: 16px;
        text:first-of-type {
          font-size:28px;
          color:rgba(221,57,44,1);
        }
        text:last-of-type {
          font-size:24px;
          color:rgba(131,131,131,1);
          text-decoration: line-through;
          margin-left: 6px;
        }
      }
    }
  }
}

</style>