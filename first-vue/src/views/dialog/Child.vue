<template>
  <div>
    <div>
      <span><strong>Body</strong></span>
      <!-- <span><el-button type="text" @click="testdialog = true">测试dialog</el-button></span> -->
    </div>

    <div class="data-float-layer">
      <span><el-button type="text" @click="testdialog = true">测试dialog2</el-button></span>
    </div>
    <el-dialog title="提示" :visible.sync="testdialog" center :fullscreen="true">
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="testdialog = false">取 消</el-button>
        <el-button type="primary" @click="testdialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      testdialog: false
    }
  }
}
</script>

<style scoped>
.data-float-layer {
  display: block;
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 45%;
  right: 0;
  background-color: #ffffff;
  overflow: hidden;
  -webkit-box-shadow: -3px 0px 6px 0px rgba(128,128,128,0.56);
  -moz-box-shadow: -3px 0px 6px 0px rgba(128,128,128,0.56);
  box-shadow: -3px 0px 6px 0px rgba(128,128,128,0.56);
  will-change: left;
}
</style>
