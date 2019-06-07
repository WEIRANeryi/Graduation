<template>
  <div class="container w960">
    <div class="write-top">
      <span>发表笔记</span>
    </div>
    <div class="write-title">
      <input type="text" placeholder="请填写标题">
    </div>
    <div class="write-msg">
      <input type="text">
    </div>
    <Button class="btn" type="primary">发表</Button>
  </div>
</template>

<script>
import {Button} from 'element-ui'
export default {
  name: "write",
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
.container {
  .write-top {
    span {
      color: #000;
      font-weight: 700;
      line-height: 14px;
      font-size: 14px;
    }
  }
  .write-title {
    margin-top: 10px;
    input {
      width: 400px;
    }
  }
  .write-msg {
    margin-top: 20px;
    input {
      width: 400px;
      height: 150px;
    }
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
