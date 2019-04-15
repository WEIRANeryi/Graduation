<template>
  <div class="container">
    <Tabs v-model="activeName" type="card">
      <TabPane label="用户管理" name="first"></TabPane>
      <TabPane label="用户管理" name="second"></TabPane>
      <TabPane label="用户管理" name="third"></TabPane>
    </Tabs>
  </div>
</template>

<script>
  import {Tabs,TabPane} from 'element-ui'
  export default {
    name: "question",
    components: {
      Tabs,
      TabPane,
    },
    data () {
      return {
        activeName: 'first'
      }
    },
  }
</script>

<style scoped>

</style>
