<template>
    <el-table-column 
        :prop="col.prop"
        :label="col.label"
        :align="col.align"
        :width="col.width"
        :fixed="col.fixed"
        show-overflow-tooltip>
        <template v-slot:header>
            <!-- 使用插槽来防止 表头过长的换行 -->
            <span :title="col.label" class="el-table__my-header-ellipsis">{{col.label}}</span>
        </template>
        <template v-if="col.children && col.children.length">
            <dynamic-theader
                v-for="(item, index) in col.children"
                :key="index"
                :col="item">
            </dynamic-theader>
        </template>
    </el-table-column>
</template>
/* 动态渲染表头，组件 */
<script>
export default {
    name: 'DynamicTheader',
    props: {
        col: {
            type: Object
        }
    },
}
</script>