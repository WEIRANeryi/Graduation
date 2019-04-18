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
            <field class="field" placeholder="请输入手机号" v-model="formData1.phone">
              <i slot="icon" class="iconfont icon-UserSettings-copy"></i>
            </field>
          </div>
          <div class="user-pwd">
            <field placeholder="请输入密码" type="password" v-model="formData1.password">
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
            <field class="field" placeholder="请输入手机号" v-model="formData2.phone">
              <i slot="icon" class="iconfont icon-UserSettings-copy"></i>
            </field>
          </div>
          <div class="user-pwd user-item">
            <field class="field" placeholder="请输入密码" type="password" v-model="formData2.password">
              <i slot="icon" class="iconfont icon-biyan"></i>
            </field>
          </div>
          <div class="user-identify user-item">
            <field class="field" placeholder="请输入验证码" v-model="formData2.code">
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
        formData1: {
          phone: '',
          password: '',
        },
        formData2: {
          phone: '',
          password: '',
          code: '',
          sort: this.values,
        },
      }
    },
    methods: {
      login () {
        this.$axios.post(this.$api.postLogin,this.formData1).then(res => {
          if (res.code == 200) {
            localStorage.setItem('token', res.token);
            alert('登陆成功')
            setTimeout(() => {
              this.$router.push({
                name: 'index'
              })
            }, 1000)
          }
        })
      },
      register () {
        this.$axios.post(this.$api.postRegister,this.formData2).then(res => {
          if (res.code == 200) {
            alert("注册成功");
            setTimeout(() => {
              this.$router.push({
                name: 'login'
              })
            }, 1000)
          } else {
            alert(res.msg)
          }
        })
      },
      Validator () {
        this.$axios.post(this.$api.sendCode,this.formData2).then(res => {
          if (res.code == 200) {
            alert("发送验证码成功");
          } else {
            alert(res.msg);
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .container {
    .content {
      width: 384px;
      margin: 0 auto;
      box-shadow: 0 12px 24px 0 rgba(28,31,33,.1);
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
    background-image: none;
  }
  .radio {
    a {
      div{
        background-image: none;
      }
    }
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
