<template>
  <DataTable :tableData="datalist"></DataTable>
</template>
<script>
import eventbus from '../../eventbus'
import DataTable from './DataTable'

export default {
  name: 'communication',
  data () {
    return {
      datalist: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    DataTable
  },
  created () {
    eventbus.$on('send', function (msg) {
      console.log(msg)
    })
  }
}
</script>
<style scoped>
</style>
