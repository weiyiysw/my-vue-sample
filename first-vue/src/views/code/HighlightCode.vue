<template>
<div class="content-text">
  <pre v-highlightjs><code>// Static source code
function(test) {
    console.log(test)
}</code></pre>
</div>
</template>

<script>
export default {
  name: 'highlightCode'
}
</script>

<style scoped>
.content-text {
  text-align: left;
}
</style>
