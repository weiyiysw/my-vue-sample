<template>
  <div>
    <el-table :data="tableData" style="width: 100%"
      stripe border
      @row-click="click">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import eventbus from '../../eventbus'

export default {
  name: 'dataTable',
  props: {
    tableData: Array
  },
  methods: {
    click () {
      eventbus.$emit('send', 'click row')
    }
  }
}
</script>
