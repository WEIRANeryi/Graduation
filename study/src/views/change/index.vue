<template>
  <div class="container">
    <Tabs v-model="activeName" type="card">
      <TabPane label="个人资料" class="tab-info tab-item" name="first">
        <div class="user-avatar clear-f">
          <span class="fl">当前头像:</span>
          <upload class="avatar-upload fl">
            <img class="avatar-img" :src="userData.avatar" alt="">
            <div class="avatar-bottom">
              <span>编辑头像</span>
            </div>
          </upload>
        </div>
        <div class="user-name user-item">
          <span>昵称：</span>
          <Input class="inputs" :placeholder="userData.nickname" v-model="userData.nickname"></Input>
        </div>
        <div class="user-des user-item">
          <span>个性签名：</span>
          <Input class="inputs" :placeholder="userData.des" v-model="userData.des"></Input>
        </div>
        <div class="user-sort user-item">
          <span>类别：</span>
          <Radio v-model="userData.sort" disabled label="0">学生</Radio>
          <Radio v-model="userData.sort" disabled label="1">教师</Radio>
        </div>
        <div class="user-sex user-item">
          <span>性别：</span>
          <Radio v-model="userData.sex" label="0">男</Radio>
          <Radio v-model="userData.sex" label="1">女</Radio>
          <Radio v-model="userData.sex" label="2">保密</Radio>
        </div>
        <div class="user-item">
          <Button class="btn1" round type="primary" @click="changeUser">保存</Button>
        </div>
      </TabPane>
      <TabPane label="安全设置" class="tab-item" name="second">
        <div class="changes" v-show="beforeClick">
          <div class="change-item">
            <div class="ch-item-fir">
              <i class="iconfont icon-duihao"></i>
              设置手机
            </div>
            <div class="ch-item-sec">已经设置</div>
            <div class="ch-item-thi" @click="handleClick1">更换手机</div>
          </div>
          <div class="change-item">
            <div class="ch-item-fir">
              <i class="iconfont icon-duihao"></i>
              设置密码
            </div>
            <div class="ch-item-sec">已经设置</div>
            <div class="ch-item-thi" @click="handleClick2">修改密码</div>
          </div>
        </div>
        <div class="change-phone" v-show="afterClick.phone">
          <Steps :active="active" finish-status="success" align-center>
            <Step title="验证身份"></Step>
            <Step title="设置手机号"></Step>
            <Step title="更改手机号成功"></Step>
          </Steps>
          <div class="steps1 step" v-show="changes[0].isTrue">
            <div class="steps-item">
              <Input type="text" class="step-input1" placeholder="原手机号" :disabled="true"></Input>
              <Input class="step-input2" type="text"  :placeholder="userData.phone" :disabled="true"></Input>
            </div>
            <div class="steps-item" >
              <Input placeholder="请输入内容" v-model="changePhone" class="step-input2"></Input>
              <Button class="btn2">获取验证码</Button>
            </div>
          </div>
          <div class="step" v-show="changes[1].isTrue">
            <div class="steps-item">
              <Input type="text" class="step-input1" placeholder="中国大陆" :disabled="true"></Input>
              <Input class="step-input2" type="text"  placeholder="请输入内容"></Input>
            </div>
            <div class="steps-item">
              <Input placeholder="请输入内容" class="step-input2" ></Input>
              <Button class="btn2">获取验证码</Button>
            </div>
          </div>
          <div class="step" v-show="changes[2].isTrue">
            <p>设置成功</p>
            <img class="step-img" src="https://s1.hdslb.com/bfs/static/security/static/img/result-success.5934aaa.png" alt="">
          </div>
          <Button type="primary" class="btn1" v-show="!changes[2].isTrue" @click="handleClick3">下一步</Button>
          <Button type="primary" class="btn1" v-show="changes[2].isTrue" @click="hadleClick4">返回个人资料</Button>
        </div>
        <div class="change-phone " v-show="afterClick.password">
          <Steps :active="active" finish-status="success" align-center>
            <Step title="验证身份"></Step>
            <Step title="设置密码"></Step>
            <Step title="更改密码成功"></Step>
          </Steps>
          <div class="steps1 step" v-show="changes[0].isTrue">
            <div class="steps-item">
              <Input type="text" class="step-input1" placeholder="手机号" :disabled="true"></Input>
              <Input class="step-input2" type="text"  placeholder="请输入内容" :disabled="true"></Input>
            </div>
            <div class="steps-item">
              <Input placeholder="请输入内容" class="step-input2"></Input>
              <Button class="btn2">获取验证码</Button>
            </div>
          </div>
          <div class="step" v-show="changes[1].isTrue">
            <div class="steps-item">
              <Input class="step-input2" type="text"  placeholder="请输入原密码"></Input>
            </div>
            <div class="steps-item">
              <Input placeholder="请输入新密码" class="step-input2"></Input>
            </div>
            <div class="steps-item">
              <Input placeholder="请重复新密码" class="step-input2"></Input>
            </div>
          </div>
          <div class="step" v-show="changes[2].isTrue">
            <p>设置成功</p>
            <img class="step-img" src="https://s1.hdslb.com/bfs/static/security/static/img/result-success.5934aaa.png" alt="">
          </div>
          <Button type="primary" class="btn1" v-show="!changes[2].isTrue" @click="handleClick3">下一步</Button>
          <Button type="primary" class="btn1" v-show="changes[2].isTrue" @click="hadleClick4">返回个人资料</Button>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import upload from '@/components/sw-upload'
  import {Input,Tabs,TabPane,Radio,Button,Step,Steps} from 'element-ui'
  export default {
    name: "index",
    components: {
      Input,
      upload,
      Tabs,
      TabPane,
      Radio,
      Button,
      Step,
      Steps,
    },
    data () {
      return {
        formData: {
          phone: '',
          password: '',
          nickname: '',
          sort: '',
          sex: '',
          des: '',
        },
        changePhone: '',
        activeName: 'first',
        active: 0,
        beforeClick: true,
        afterClick: {
          phone: false,
          password: false,
        },
        changes: [
          {
            isTrue: true
          },
          {
            isTrue: false
          },
          {
            isTrue: false
          },
        ],
      }
    },
    methods: {
      handleClick1 () {
        this.beforeClick = false;
        this.afterClick.phone = true;
      },
      handleClick2 () {
        this.beforeClick = false;
        this.afterClick.password = true;
      },
      handleClick3 () {
        for (var i = 0;i<3;i++) {
          if (this.changes[i].isTrue == true) {
            break;
          }
        }
        if (i == 0) {
          this.changes[0].isTrue = false;
          this.changes[1].isTrue = true;
          this.changes[2].isTrue = false;
        } else if (i == 1) {
          this.changes[0].isTrue = false;
          this.changes[1].isTrue = false;
          this.changes[2].isTrue = true;
        }
        this.active ++;
      },
      hadleClick4 () {
        this.$router.push({
          name: 'personal'
        })
      },
      changeUser () {
        this.$axios.post(this.$api.changeUser,this.userData).then(res => {
          if (res.code == 200) {
            alert("更改个人信息成功")
          } else {
            alert(res.msg)
          }
        })
      },
    },
    created() {
      this.$store.dispatch('getUserData')
    },
    computed: {
      userData () {
        return this.$store.state.userData
      }
    }
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
    text-align: center;
  }
  .change-phone {
    width: 500px;
  }
  .change-item {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 500px;
    border-bottom: 1px solid #409eff;
    font-size: 16px;
    .ch-item-fir {
      line-height: 40px;
      .iconfont {
        font-size: 20px;
        color: #409eff;
      }
    }
    .ch-item-sec {
      line-height: 40px;
      color: #6d757a;
      font-size: 12px;
      min-height: 20px;
    }
    .ch-item-thi {
      line-height: 40px;
      color: #00a1d6;
      font-size: 12px;
    }
  }
  .step {
    .steps-item {
      display: flex;
      margin-top: 20px;
      .step-input1 {
        max-width: 100px;
      }
      .step-input2 {
        max-width: 200px;
      }
      .btn2 {
        margin-left: 20px;
      }
    }
  }
  .btn1 {
    margin-top: 50px;
    width: 40%;
    display: inline-block;
  }
  .step-img {
    display: inline-block;
    width: 160px;
  }
</style>
