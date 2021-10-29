<template>
    <view class='search-bar'>
        <view class='search-bar__box'>
            <view class='search-bar__search'>
                <image class="search-bar__icon" :src="require('../assets/icon/icon_search.png')" mode="aspectFill" />
            </view>
            <view class='search-bar__input'>
                <input
                class="search-bar__input"
                type='text'
                :value="inputValue"
                placeholder="请搜索"
                placeholderClass="search-bar__placeholder"
                max-length="32"
                autoFocus="false"
                @input="handleSearchInput"
                />
            </view>
            <view class='search-bar__clear'
                hidden={!inputValue}
                @click="handleClearClick"
            >
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { ref } from "vue"

export default {
    name: 'SearchBar',
    setup() {
        const inputValue = ref('')
        function handleSearchInput (event) {
            const { detail: { value } } = event
            inputValue.value = value || ''
        }

        function handleClearClick () {
            inputValue.value = ''
        }

        return {
            handleSearchInput,
            handleClearClick,
            inputValue
        }
    }
}
</script>

<style lang="scss">
@import "../assets/styles/variable";

.search-bar {
  position: relative;
  padding: 20px 40px 24px 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: $color-background;

  &__box {
    position: relative;
    flex: 1;
    width: 100%;
    height: 72px;
    overflow: hidden;
    background-color: $color-shade;
    background-clip: padding-box;
    border-radius: 10px;
  }

  &__icon {
    width: 28px;
    height: 28px;
  }

  &__search {
    position: absolute;
    left: 18rpx;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__input {
    padding: 0 30px;
    width: 100%;
    height: 100%;
    min-height: inherit;
    border: 0;
    box-sizing: border-box;
    background: transparent;
    font-size: 28px;
    color: rgba(131, 131, 131, 1);
  }

  &__placeholder {
    font-size: 28px;
    color: rgba(131, 131, 131, 1);
  }

  &__clear {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 15rpx;
    height: 100%;
  }
}

</style>