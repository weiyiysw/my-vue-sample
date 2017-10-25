<template>
  <div>
    <span>未格式化</span>
    <div style="text-align: left;">
      <pre v-highlightjs="data"><code></code></pre>
    </div>

    <span>
      计算属性实现格式化
    </span>
    <div style="text-align: left;">
      <pre v-highlightjs="formatData">
        <code></code>
      </pre>
    </div>

    <span>
      <el-button @click="formatCode">点击按钮实现格式化</el-button>
    </span>
    <div style="text-align: left;">
      <pre v-highlightjs="fdata">
        <code></code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeautifyCode',
  data() {
    return {
      data: 'function(test) {console.log(test)}',
      fdata: ''
    }
  },
  computed: {
    formatData: function() {
      const f = this.$jsBeautify(this.data, { indent_size: 2})
      return f
    }
  },
  methods: {
    formatCode() {
      this.fdata = this.$jsBeautify(this.data, { indent_size: 2})
      console.log(this.fdata)
    }
  }
}
</script>
