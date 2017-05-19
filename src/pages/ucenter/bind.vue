<template>
<div>
  <group title="请绑定手机号">
  </group>
  <group class="weui-cells_form">
    <x-input title="验证码" class="weui-cell_vcode" v-model="phrase">
      <img slot="right" class="weui-vcode-img" @click="reflushCaptcha" :src="captcha">
    </x-input>
    <x-input title="手机号" v-model="mobile" class="weui-vcode" keyboard="number" is-type="china-mobile">
      <x-button slot="right" :disabled="sendMessageBtnStatus" type="default" @click.native="sendMessage" mini>{{ sendMessageStatus }}</x-button>
    </x-input>
  </group>
  <group>
    <x-input title="短信验证码" v-model="mobileCode" ></x-input>
  </group>
  <group>
    <x-button :disabled="bindBtnStatus" type="primary" @click.native="bindMobile">绑定</x-button>
  </group>
</div>
</template>

<script>
import {XInput, Group, XButton} from 'vux'
import axios from '@/plugins/axios'

export default {
  components: {
    XInput,
    Group,
    XButton
  },
  data () {
    return {
      captcha: '',
      code: '',
      mobile: '',
      phrase: '',
      mobileCode: '',
      sendMessageStatus: '短信验证码',
      sendMessageBtnStatus: true,
      bindBtnStatus: true
    }
  },
  created () {
    axios.get('/_common/captcha')
      .then((res) => {
        this.captcha = res.data.data
        this.code = res.data.code
      })
  },
  watch: {
    phrase: function () {
      this.sendMessageBtnStatus = !(this.phrase && this.mobile)
    },
    mobile: function () {
      this.sendMessageBtnStatus = !(this.phrase && this.mobile)
    },
    mobileCode: function () {
      this.bindBtnStatus = this.mobileCode === '' || this.mobile === ''
    }
  },
  methods: {
    reflushCaptcha () {
      axios.get('/_common/captcha')
        .then((res) => {
          this.captcha = res.data.data
          this.code = res.data.code
        })
    },
    sendMessage () {
      axios.post('/_common/sms/binds', {
        code: this.code,
        phrase: this.phrase,
        mobile: this.mobile
      })
      .then((res) => {
        this.sendMessageBtnStatus = true
        const startTime = Math.ceil(((new Date().getTime()) / 1000))
        const t = setInterval(() => {
          let leaveTime = 60 - (Math.ceil(((new Date().getTime()) / 1000)) - startTime)
          if (leaveTime < 1) {
            clearInterval(t)
            this.sendMessageBtnStatus = false
            this.sendMessageStatus = '重新发送'
            this.reflushCaptcha()
            this.phrase = ''
          } else {
            this.sendMessageStatus = `${leaveTime}秒后重发`
          }
        }, 1000)
      })
      .catch((err) => {
        this.reflushCaptcha()
        this.phrase = ''
        this.$vux.toast.show(err.data.message)
      })
    },
    bindMobile () {
      if (this.$route.query.openId) {
        axios.post('/_common/tokens', {
          code: this.mobileCode,
          mobile: this.mobile,
          mode: 4,
          openId: this.$route.query.openId
        })
        .then((res) => {
          this.$router.replace(this.$route.query.callbackUri)
        })
        .catch((err) => {
          this.$vux.toast.show(err.data.message)
        })
      } else {
        this.$vux.toast.show('微信用户标识丢失')
      }
    }
  }
}
</script>

<style lang="css">
</style>
