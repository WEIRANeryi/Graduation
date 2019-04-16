<template>
  <div class="container">
    <myHeader></myHeader>
    <div class="content w960">
      <div class="content-item user-phone">
        <span>手机号</span>
        <Input placeholder="你的手机号" v-model="formData.phone" clearable></Input>
      </div>
      <div class="content-item user-name">
        <span>你的昵称</span>
        <Input placeholder="请输入内容" v-model="formData.nickname" clearable></Input>
      </div>
      <Input placeholder="请输入内容" v-model="formData.password" show-password clearable></Input>

    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/header'
  import upload from '@/components/sw-upload'
  import {Input} from 'element-ui'
  export default {
    name: "index",
    components: {
      myHeader,
      Input,
      upload
    },
    data () {
      return {
        formData: {
          phone: '',
          password: '',
          nickname: '',
          sort: '',
          sex: '',
        }
      }
    },
    methods: {

    },
  }
</script>

<style scoped lang="scss">
  .content {
    margin-top: 30px;
    .content-item {
      display: flex;
      justify-content: space-between;
      Input {
        max-width: 300px;
      }
    }
  }
</style>
