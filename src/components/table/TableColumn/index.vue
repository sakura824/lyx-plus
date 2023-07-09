<template>
    <el-table-column v-bind="colData">
        <template v-if="colData.children">
            <table-column
            v-for="(col, colIndex) in colData.children"
            :key="'child' + colIndex"
            :colData="col"
            >
            </table-column>
        </template>
        <template v-if="colData.slot" #="{row}">
            <slot name="default" :row="row"></slot>
        </template>
    </el-table-column>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
defineProps({
    colData: {
        type: Object,
        default: () => {}
    }
})

onMounted(() => {
})
</script>
<script lang="ts">
export default {
    name: 'tableColumn'
}
</script>

<style scoped>

</style>