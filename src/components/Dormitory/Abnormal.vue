<template>
    <div id="abnormal">
        <el-table :data="tableData"
            border 
            size="mini"
            :header-cell-style="{background:'#F5F7FA'}"
            style="width: 100%">
            <el-table-column align="center" prop="area" label="楼栋" show-overflow-tooltip>
                <template v-slot:header>
                    <span class="el-table__my-header-ellipsis">楼栋</span>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="room" label="房间" show-overflow-tooltip>
                <template v-slot:header>
                    <span class="el-table__my-header-ellipsis">房间</span>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="name" label="上月抄表" show-overflow-tooltip>
                <template v-slot:header>
                    <span class="el-table__my-header-ellipsis">上月抄表</span>
                </template>
                <template slot-scope="scope">
                    <span v-show="!scope.row.iseditor">{{ scope.row.name }}</span>
                    <el-input size="mini" type="text"
                        :placeholder="scope.row.name"
                        v-show="scope.row.iseditor"
                        v-model="EditDate.name" />
                </template>
            </el-table-column>
            <el-table-column align="center" prop="address" label="本月抄表" show-overflow-tooltip>
                <template v-slot:header>
                    <span class="el-table__my-header-ellipsis">本月抄表</span>
                </template>
                <template slot-scope="scope">
                    <span v-show="!scope.row.iseditor">{{ scope.row.address }}</span>
                    <el-input size="mini" type="text"
                        :placeholder="scope.row.name"
                        v-show="scope.row.iseditor"
                        v-model="EditDate.address" />
                </template>
            </el-table-column>
            <el-table-column align="center" prop="address" label="用量" show-overflow-tooltip>
                <template v-slot:header>
                    <span class="el-table__my-header-ellipsis">用量</span>
                </template>
                <template slot-scope="scope">
                    <span v-show="!scope.row.iseditor">{{ scope.row.address }}</span>
                    <el-input size="mini" type="text"
                        :placeholder="scope.row.name"
                        v-show="scope.row.iseditor"
                        v-model="EditDate.address" />
                </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button size="mini" circle
                        icon="el-icon-edit" 
                        v-show ="!EDIT.show"
                        @click="edit(scope.row, scope)" />
                    <!-- 启动编辑 -->
                    <el-button size="mini" circle
                        icon="el-icon-upload2"
                        v-show="EDIT.show && EDIT.index === scope.$index" 
                        style="margin-right: 8px"
                        @click="editSave(scope.row)">
                    </el-button>
                    <el-popconfirm title="确定取消?"
                        v-model="popVisible" 
                        @confirm="popConfirm(scope.row)">
                        <el-button size="mini" circle
                            slot="reference"
                            icon="el-icon-delete"
                            v-show="EDIT.show && EDIT.index === scope.$index" >
                        </el-button>
                    </el-popconfirm>
                    
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
/* 异常处理 */
<script>
    export default {
        name: 'Abnormal',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    iseditor: false
                }, {
                    date: '2016-05-04',
                    name: '王小',
                    address: '上海市普陀区金沙江路 1517 弄', 
                    iseditor: false
                }, {
                    date: '2016-05-01',
                    name: '王虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    iseditor: false
                }, {
                    date: '2016-05-03',
                    name: '小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    iseditor: false
                }],
                
                popVisible: false,
                // 保存编辑状态
                EDIT: {
                    show: false,
                    index: ''
                },
                /* 临时保存的数据 */
                EditDate: {},

            }
        },
        methods: {
            edit(row, scope) {
                this.EDIT = {
                    show: true,
                    index: scope['$index']
                }
                row.iseditor = true;
                this.EditDate = { ...row }
                console.log('编辑', row, scope, this.EDIT)
            },
            /* 保存修改数据 上传 */
            editSave(row) {
                this.EDIT = {}
                this.EditDate = {}
                row.iseditor = false
                console.log('保存编辑后的数据', row, this.EditDate)
            },
            /* 未保存 退出 */
            popConfirm(row){
                this.popVisible = false;
                this.EDIT = {}
                this.EditDate = {}
                row.iseditor = false
                console.log('未保存 退出')
            },
            // popCancel(){
            //     console.log('未保存 继续编辑')
            // }
        },  
    }
</script>
<style scoped>

</style>