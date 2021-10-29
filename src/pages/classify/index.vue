<template>
    <SearchBar></SearchBar>

    <ClassifyItem v-for="item in product" :key="item.name" :product="item"></ClassifyItem>
</template>

<script lang="ts">
import SearchBar from '../../components/SearchBar.vue'
import ClassifyItem from '../../components/ClassifyItem.vue'
import { useClassify } from '../../assets/js/use_classify'

export default {
    name: 'Classify',
    components: {
        SearchBar,
        ClassifyItem
    },
    setup() {
        const { product } = useClassify()

        return { product }
    }
}
</script>

<style lang="scss">
@import "../../assets/styles/mixin";

.classify-page {
  @include wh(100%, 100%);
}
</style>