<template>
  <label class="sw-upload-wrap">
    <input type="file" class="sw-upload-input" @change="change">
    <slot></slot>
  </label>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "sw-upload",
    data () {
      return {
        token: ''
      }
    },
    methods: {
      getToken () {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data;
        })
      },
      change (event) {
        const file =  event.target.files[0]
        const form = new FormData();
        form.append('file',file)
        form.append('token',this.token)
        axios.post('https://upload-z1.qiniup.com',form).then(res => {
          this.$emit('success',res.data.url)
        })
      },
    },
    created() {
      this.getToken()
    }
  }
</script>

<style lang="scss">
  .sw-upload-wrap {
    display: block;
    .sw-upload-input {
      display: none;
    }
  }
</style>
