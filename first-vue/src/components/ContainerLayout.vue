<template>
<el-container>
  <el-aside width="200px">
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
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      body
      <!-- <pre v-highlightjs>
        <code class="javascript">const str = "This sourcecode will update dynamically"</code>
      </pre> -->
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'ContainerLayout'
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: calc(100vh - 4px);
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.navmenu {
  height: 100%;
  text-align: left;
}
</style>
