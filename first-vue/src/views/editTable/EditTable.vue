<template>
<div>
  <div>
    <el-form :inline="true" :model="userInfo">
      <el-form-item label="用户名">
        <el-input v-model="userInfo.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="userInfo.age" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUserInfo">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div>
    <el-table :data="userInfos" border stripe>
      <el-table-column prop="user" label="用户名">
        <template slot-scope="scope">
            <el-input v-if="scope.row.isEdit" size="small" v-model="scope.row.user"></el-input>
            <span v-else>{{scope.row.user}}</span>
          </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄">
        <template slot-scope="scope">
            <el-input v-if="scope.row.isEdit" size="small" v-model="scope.row.age"></el-input>
            <span v-else>{{scope.row.age}}</span>
          </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <template v-if="!scope.row.isEdit">
            <el-button size="small" icon="el-icon-edit" type="primary" @click="handleEdit(scope.$index, scope.row)"></el-button>
            <el-button size="small" icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row)"></el-button>
          </template>
          <template v-else>
            <el-button type="primary" size="small" @click="save(scope.$index, scope.row)">保存</el-button>
            <el-button type="primary" size="small" @click="cancel(scope.$index, scope.row)">取消</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'editTable',
  data() {
    return {
      userInfo: {
        user: '',
        age: ''
      },
      userInfos: []
    }
  },
  methods: {
    checkEdit(row, column) {
      row.isEdit = true
    },
    handleEdit(index, row) {
      row.isEdit = true
    },
    handleDelete(index, row) {
      // let arrayIndex = this.userInfos.findIndex(function(value, index, arr) {
      //   return (value.user === row.user)
      // })
      // console.log(arrayIndex)
      this.userInfos.splice(index, 1)
    },
    save(index, row) {
      console.log('save')
      row.isEdit = false
    },
    cancel(index, row) {
      row.isEdit = false
    },
    addUserInfo() {
      console.log(this.$route.matched)
      if (this.userInfo.user !== null && this.userInfo.age !== null) {
        // let newuser = this.test(this.userInfo)
        let newuser = this.add()
        this.userInfos.push(newuser)
        // this.userInfo.user = ''
        // this.userInfo.age = ''
      }
    },
    test(data) {
      return {
        user: data.user,
        age: data.age,
        isEdit: false
      }
    },
    add() {
      return {
        user: '',
        age: '',
        isEdit: true
      }
    }
  }
}
</script>

<style scoped>
</style>
