<template>
  <div class="container">
    <Tabs v-model="activeName" type="card">
      <TabPane label="个人资料" class="tab-info tab-item" name="first">
        <div class="user-avatar clear-f">
          <span class="fl">当前头像:</span>
          <upload class="avatar-upload fl">
            <img class="avatar-img" src="../../../img/personal-img/avatar.jpg" alt="">
            <div class="avatar-bottom">
              <span>编辑头像</span>
            </div>
          </upload>
        </div>
        <div class="user-name user-item">
          <span>昵称：</span>
          <Input class="inputs" placeholder="请输入你的昵称" v-model="formData.nickname"></Input>
        </div>
        <div class="user-sort user-item">
          <span>类别：</span>
          <Radio v-model="formData.sort" disabled label="0">学生</Radio>
          <Radio v-model="formData.sort" disabled label="1">教师</Radio>
        </div>
        <div class="user-sex user-item">
          <span>性别：</span>
          <Radio v-model="formData.sex" label="0">男</Radio>
          <Radio v-model="formData.sex" label="1">女</Radio>
          <Radio v-model="formData.sex" label="2">保密</Radio>
        </div>
        <div class="user-item">
          <Button class="btn1" round type="primary">保存</Button>
        </div>
      </TabPane>
      <TabPane label="安全设置" class="tab-item" name="second">
        
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import upload from '@/components/sw-upload'
  import {Input,Tabs,TabPane,Radio,Button} from 'element-ui'
  export default {
    name: "index",
    components: {
      Input,
      upload,
      Tabs,
      TabPane,
      Radio,
      Button,
    },
    data () {
      return {
        formData: {
          phone: '',
          password: '',
          nickname: '',
          sort: '',
          sex: '',
        },
        activeName: 'first',
      }
    },
    methods: {

    },
  }
</script>

<style scoped lang="scss">
  .user-item {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    span {
      margin-right: 20px;
    }
  }
  .avatar-upload {
    position: relative;
    margin-left: 20px;
    .avatar-img {
      width: 100px;
      height: 100px;
    }
    .avatar-bottom {
      position: absolute;
      background-color: #8e8e8e;
      opacity: 0.6;
      font-size: 16px;
      bottom: 0;
      left: 0;
      right: 0;
      color: #f3f3f3;
      text-align: center;
      span {
        display: inline-block;
        width: 100%;
        text-decoration: underline;
        cursor:pointer;
      }
    }
  }
  .inputs {
    width: auto;
  }
  .tab-item {
    margin-top: 20px;
    margin-left: 30px;
  }
</style>
