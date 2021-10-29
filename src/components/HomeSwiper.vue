<template>
    <swiper class="swiper"
        indicatorDots
        autoplay="true"
        circular="true"
        indicatorColor="rgba(235,235,235,1)"
        indicatorActiveColor="rgba(0,0,0,1)"
        @change="onChangeSwiper"
    >
        <swiper-item v-for="(item, index) in swiperList" :class="{'active': current === index}" :key="item">
            <image :src="item.url" class="slide-image" mode="aspectFill"></image>
        </swiper-item>
    </swiper>
</template>

<script lang="ts">
import { useSwiper } from '../assets/js/use_home'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HomeSwiper',
    setup() {
        const { swiperList, current, onTabClick, onChangeSwiper } = useSwiper()

        return { current, onTabClick, onChangeSwiper, swiperList }
    }
})
</script>

<style lang="scss">
swiper {
    width: 100%;
    height: 400px;
    swiper-item {
        position: relative;
        width: 86% !important;
        left: 52px;
        image {
            transform: scale(.9);
            transition: all .3s ease;
            border-radius: 8px;
        }
        .slide-image {
            width: 100%;
            height: 100%;
        }
    }
    .active {
        image {
            transform: scale(1);
            transition: all .3s ease;
        }
    }
}
</style>