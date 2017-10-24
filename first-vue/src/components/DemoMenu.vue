<template>
<div>
  <el-menu :router="true" class="navmenu">
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/testDialog">
      <i class="el-icon-menu"></i>
      <span slot="title">对话框</span>
    </el-menu-item>
    <el-menu-item index="/editTable">
      <i class="el-icon-menu"></i>
      <span slot="title">可编辑列表</span>
    </el-menu-item>
    <el-menu-item index="/communication">
      <i class="el-icon-menu"></i>
      <span slot="title">组件通信</span>
    </el-menu-item>
    <el-menu-item index="/highlightCode">
      <i class="el-icon-menu"></i>
      <span slot="title">高亮代码测试</span>
    </el-menu-item>
    <el-menu-item index="/beautifyCode">
      <i class="el-icon-menu"></i>
      <span slot="title">格式化代码测试</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'demoMenu'
}
</script>

<style scoped>
.navmenu {
  height: 100%;
  text-align: left;
  background-color: #D3DCE6
}
</style>
