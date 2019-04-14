<template>
  <div class="container">
    <div class="content">
      <Navbar class="navbar" v-model="selected">
        <TabItem id="1">登陆</TabItem>
        <TabItem id="2">注册</TabItem>
      </Navbar>
      <TabContainer v-model="selected">
        <TabContainerItem class="login" id='1'>
          <img src="../../../img/login/login.gif" alt="">
          <div class="user-name">
            <field class="field" placeholder="请输入用户名">
              <i slot="icon" class="iconfont icon-UserSettings-copy"></i>
            </field>
          </div>
          <div class="user-pwd">
            <field placeholder="请输入密码" type="password" v-model="formData.phone">
              <i slot="icon" class="iconfont icon-biyan"></i>
            </field>
          </div>
          <Button class="btn1" type="primary" @click="login">立即登陆</Button>
        </TabContainerItem>
      </TabContainer>
      <TabContainer v-model="selected">
        <TabContainerItem class="register" id='2'>
          <img src="../../../img/login/register.gif" alt="">
          <div class="user-name user-item">
            <field class="field" placeholder="请输入手机号">
              <i slot="icon" class="iconfont icon-UserSettings-copy"></i>
            </field>
          </div>
          <div class="user-pwd user-item">
            <field class="field" placeholder="请输入密码" type="password" v-model="formData.password">
              <i slot="icon" class="iconfont icon-biyan"></i>
            </field>
          </div>
          <div class="user-identify user-item">
            <field class="field" placeholder="请输入验证码" v-model="formData.code">
              <i slot="icon" class="iconfont icon-shouji"></i>
              <Button slot="right" type="primary" class="btn3" @click="Validator">获取验证码</Button>
            </field>
          </div>
          <Radio class="radio" v-model="values" :options="['学生', '教师']"></Radio>
          <Button class="btn2" type="primary" @click="register">立即注册</Button>
        </TabContainerItem>
      </TabContainer>
    </div>
  </div>
</template>

<script>
  import {Button,Navbar,TabItem,TabContainer,TabContainerItem,Radio} from 'mint-ui';
  import field from '@/components/field'
  export default {
    name: "login",
    components: {
      Button,
      field,
      Navbar,
      TabItem,
      TabContainer,
      TabContainerItem,
      Radio,
    },
    props: {
      selected: String,
    },
    data () {
      return {

        values: '',
        formData: {
          phone: '',
          password: '',
          code: ''
        },
      }
    },
    methods: {
      login () {

      },
      register () {

      },
      Validator () {

      },
    }
  }
</script>

<style scoped lang="scss">
  .container {
    .content {
      width: 384px;
      margin: 0 auto;
      border: 1px solid #000;
      text-align: center;
      background-color: #fff;
      margin-top: 100px;
      position: relative;
      .user-name {
        display: flex;
        .iconfont {
          margin-top: 5px;
          font-size: 28px;
        }
      }
      .user-pwd {
        display: flex;
        .iconfont {
          margin-top: 5px;
          font-size: 28px;
        }
      }
    }
  }
  .btn1 {
    display: inline-block;
    width: 50%;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .btn2 {
    display: inline-block;
    width: 50%;
    margin-bottom: 10px;
  }
  .navbar {
    background-color: #f3f3f3;
    margin-bottom: 3px;
  }
  .radio {
    display: flex;
  }
  .btn3 {
    font-size: 15px;
    width: 180px;
  }
  .register {
    .user-item{
      .field {
        margin-top: 10px;
      }
    }
  }
</style>
