<template>
    <view class="mine-page">
        <view class="userinfo" @click="routeMineEdit">
            <image src="../../assets/img/image_avatar.jpg" mode="aspectFill"></image>
            <view class="username">
                <text>用户昵称</text>
                <view class="level">
                    <view class="icon-vip">
                        <image src="../../assets/icon/icon_vip.png" mode="aspectFill"></image>
                    </view>
                    <text>V0</text>
                </view>
            </view>
            <view class="icon-right-2" />
        </view>

        <view class="content">
            <view class="list" @click="routeMineOrder">
                <text>商城订单</text>
                <text class="text-subtitle">全部订单</text>
                <view class="icon-right" />
            </view>
            <view class="order-status">
                <view class="order-status-item" @click="routeMineOrder">
                    <view class="status-1"></view>
                    <text>待付款</text>
                </view>
                <view class="order-status-item" @click="routeMineOrder">
                    <view class="status-2"></view>
                    <text>待发货</text>
                </view>
                <view class="order-status-item" @click="routeMineOrder">
                    <view class="status-3"></view>
                    <text>待收货</text>
                </view>
                <view class="order-status-item" @click="routeMineOrder">
                    <view class="status-4"></view>
                    <text>待评价</text>
                </view>
            </view>
        </view>

        <view class="content">
            <view class="list" @click="routeMineCoupons">
                <text>我的优惠券</text>
                <view class="icon-right" />
            </view>
            <view class="list" @click="routeMineAddress">
                <text>我的收货地址</text>
                <view class="icon-right" />
            </view>
            <view class="list" @click="routeMineEvaluation">
                <text>我的评价</text>
                <view class="icon-right" />
            </view>
        </view>

        <view class="content">
            <view class="list">
                <text>服务协议</text>
                <view class="icon-right" />
            </view>
            <view class="list">
                <text>咨询建议</text>
                <view class="icon-right" />
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'home',
    setup() {
        function routeMineAddress() {
            Taro.navigateTo({
                url: '../mineAddress/index'
            })
        }

        function routeMineCoupons() {
            Taro.navigateTo({
                url: '../mineCoupons/index'
            })
        }

        function routeMineEdit() {
            Taro.navigateTo({
                url: '../mineEdit/index'
            })
        }

        function routeMineEvaluation() {
            Taro.navigateTo({
                url: '../mineEvaluation/index'
            })
        }

        function routeMineOrder() {
            Taro.navigateTo({
                url: '../mineOrder/index'
            })
        }

        return { routeMineAddress, routeMineCoupons, routeMineEdit, routeMineEvaluation, routeMineOrder }
    }
}
</script>

<style lang="scss">
@import "../../assets/styles/mixin";

page {
  background: rgba(238, 238, 238, 1);
}

.mine-page {
  @include wh(100%, 100%);
}

.userinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 256px;
  padding: 0 40px;
  background: rgba(18, 53, 118, 1);

  image {
    width: 136px;
    height: 136px;
    border-radius: 50%;
  }

  .username {
    margin-left: 24px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    text {
      font-size: 32px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }

    .level {
      padding-right: 10px;
      // height: 34px;
      border-radius: 30px;
      border: 2px solid rgba(255, 215, 116, 1);
      margin-top: 8px;
      display: flex;
      align-items: center;



      text {
        font-size: 20px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(250, 197, 56, 1);
        line-height: 34px;
      }

      .icon-vip {
        margin-right: 4px;
        width: 36px;
        height: 36px;
        background-color: rgba(250, 197, 56, 1);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        image {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  .icon-right-2 {
    width: 16px;
    height: 28px;
    background-image: url("../../assets/icon/icon_right3.png");
    background-size: contain;

    line-height: 90px;
  }
}

.content {
  background-color: #fff;
  width: 100%;
  margin-top: 16px;

  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    margin: 0 40px;
    border-bottom: 2px solid #eee;

    text:last-of-type {
      font-size: 24px;
      font-family: PingFangSC-Regular;
      color: rgba(131, 131, 131, 1);
      line-height: 90px;
    }

    text:first-of-type {
      font-size: 28px;
      font-family: PingFangSC-Regular;
      color: rgba(0, 0, 0, 1);
      line-height: 90px;
    }

    .text-subtitle {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      margin-right: 12px;
    }

    .icon-right {
      width: 12px;
      height: 24px;
      background-image: url("../../assets/icon/icon_right2.png");
      background-size: contain;
      line-height: 90px;
    }
  }

  .order-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 84px;
    height: 142px;

    .order-status-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .status-1 {
        width: 64px;
        height: 64px;
        background-image: url('../../assets/icon/icon_payment.png');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      .status-2 {
        width: 64px;
        height: 64px;
        background-image: url('../../assets/icon/icon_delivery.png');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      .status-3 {
        width: 64px;
        height: 64px;
        background-image: url('../../assets/icon/icon_receive.png');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      .status-4 {
        width: 64px;
        height: 64px;
        background-image: url('../../assets/icon/icon_evaluation.png');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      text {
        font-size: 24px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        margin-top: 12px;
      }
    }
  }
}

</style>