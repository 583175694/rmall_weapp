<template>
    <view class="cart-page">
        <view class="cart-content">
            <view class="select-all">
                <checkbox value="" checked="selectAll">全选</checkbox>
                <text v-if="!edit" @click="onEdit()">编辑</text>
                <text v-else @click="onEdit()">完成</text>
            </view>
            <view class="goods-list" v-for="item in goodsList" :key="item.name">
                <checkbox v-if="item.effective" value="" checked="selectAll"></checkbox>
                <view v-else class="failure">失效</view>
                <image class="goods-image" :src="item.url" mode="aspectFill" />
                <view class="goods-info">
                    <text>{{item.name}}</text>
                    <text>{{item.attribute}}</text>
                    <text v-if="item.effective">￥ {{item.price}}</text>
                    <text v-else class="effected">对不起，该宝贝已经失效</text>
                </view>
                <view class="counter">
                    <view class="sub">-</view>
                    <view class="number">{{item.number}}</view>
                    <view class="add">+</view>
                </view>
            </view>
        </view>

        <view class="empty">清空失效宝贝</view>

        <view v-if="!edit" class="total">
            <text>总计：</text>
            <text>￥0</text>
            <view class="total-pay">
                <text>去结算(0)</text>
            </view>
        </view>

        <view v-else class="total delete">
            <checkbox value="" :checked="selectAll">全选</checkbox>
            <view class="total-pay">
                <text>删除</text>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'

export default {
    name: 'Cart',
    setup() {
        const selectAll = ref(true)
        const goodsList = reactive([{
            name: '商品名称',
            attribute: '商品属性',
            price: '1999',
            url: require('../../assets/img/flower_1.jpg'),
            number: 1,
            effective: true
        }, {
            name: '商品名称',
            attribute: '商品属性',
            price: '1999',
            url: require('../../assets/img/flower_1.jpg'),
            number: 1,
            effective: true
        }, {
            name: '商品名称',
            attribute: '商品属性',
            price: '1999',
            url: require('../../assets/img/flower_1.jpg'),
            number: 1,
            effective: false
        }])
        const edit = ref(false)

        function onEdit() {
            edit.value = !edit
        }

        return { selectAll, goodsList, edit, onEdit }
    }
}
</script>

<style lang="scss">
@import "../../assets/styles/mixin";

page {
  background: rgba(238, 238, 238, 1);
}

.cart-page {
  @include wh(100%, 100%);
}

.cart-content {
  width: 100%;
  background-color: #fff;

  .select-all {
    width: 670px;
    height: 86px;
    line-height: 86px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    border-bottom: 2px solid #eee;

    checkbox {
      font-size: 24px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }

    text {
      font-size: 24px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }

  .goods-list {
    width: 670px;
    height: 184px;
    border-bottom: 2px solid #eee;
    display: flex;
    align-items: center;
    margin: 0 40px;
    position: relative;

    .failure {
      width: 36px;
      height: 20px;
      background: rgba(216, 216, 216, 1);
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
      padding: 2px 3px;
      // margin-left: -5px;
    }

    .goods-image {
      width: 128px;
      height: 128px;
      margin-left: 12px;
    }

    .goods-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 24px;

      text:first-of-type {
        font-size: 28px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
      }

      text:nth-of-type(2) {
        font-size: 24px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(131, 131, 131, 1);
      }

      .effected {
        font-size: 24px !important;
        color: rgba(153, 153, 153, 1) !important;
      }

      text:last-of-type {
        font-size: 28px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(221, 57, 44, 1);
        margin-top: 14px;
      }
    }

    .counter {
      width: 178px;
      height: 40px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(184, 184, 184, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 28px;

      .sub {
        width: 33.33%;
        text-align: center;
        color: rgba(216, 216, 216, 1);
      }

      .number {
        width: 33.33%;
        text-align: center;
        font-size: 24px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }

      .add {
        width: 33.33%;
        text-align: center;
        color: rgba(216, 216, 216, 1);
      }
    }
  }
}

.empty {
  width: 176px;
  height: 40px;
  border: 1px solid rgba(153, 153, 153, 1);
  background: rgba(238, 238, 238, 1);
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 24px;
  font-size: 24px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(56, 56, 56, 1);
  border-radius: 6px;
}

.total {
  width: 100%;
  height: 106px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  text:first-of-type {
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }

  text:nth-of-type(2) {
    font-size: 28px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(221, 57, 44, 1);
    margin-right: 20px;
  }

  .total-pay {
    height: 60px;
    background: rgba(19, 53, 118, 1);
    border-radius: 8px;
    text-align: center;
    margin-right: 40px;
    padding: 0 18px;

    text {
      font-size: 24px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 60px;
    }
  }
}

.delete {
  display: flex;
  justify-content: space-between;
  checkbox {
    font-size: 24px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    margin-left: 40px;
  }
}

checkbox .wx-checkbox-input {
  border-radius: 50%;
  height: 27px;
  width: 27px;
  border: 1px solid #979797;
}

/* checkbox选中时样式 */

checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  background-color: rgba(19, 53, 118, 1);
  border: 1px solid rgba(19, 53, 118, 1);
  /* 自定义样式.... */
}

checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
  border-radius: 50%;
  width: 27px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  font-size: 20px;
  /* 对勾大小 28rpx */
  color: #fff;
  /* 对勾颜色 白色 */
  background: transparent;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}

</style>