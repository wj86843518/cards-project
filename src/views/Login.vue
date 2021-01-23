<template>
  <div class="login-box">
    <van-field
      v-model="mobile"
      center
      clearable
      placeholder="请输入手机号"
      use-button-slot
    >
      <van-button
        slot="button"
        size="small"
        type="primary"
        :disabled="!validateMobile() || !!countdown"
        @click="send"
        >{{ sendBtnText }}</van-button
      >
    </van-field>
    <van-field
      v-model="verificationCode"
      center
      clearable
      placeholder="请输入短信验证码"
    >
    </van-field>
    <van-button
      round
      type="info"
      block
      class="confirm-btn"
      :disabled="confirmBtnDisabled"
      @click="confirm"
      >确定</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      verificationCode: "",
      countdown: 0,
      sendBtnText: "发送验证码",
    };
  },
  computed: {
    confirmBtnDisabled: function () {
      return !this.validateMobile() || !this.validateVertificationCode();
    },
  },
  methods: {
    send() {
      this.countDown();
    },
    confirm() {},
    countDown() {
      this.countdown = 10;
      this.sendBtnText = `(${this.countdown}s)`;
      const timer = setInterval(() => {
        this.sendBtnText = `(${--this.countdown}s)`;
        if (this.countdown === 0) {
          clearInterval(timer);
          this.sendBtnText = "发送验证码";
        }
      }, 1000);
    },
    validateMobile() {
      const regx = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (!this.mobile.trim() || !regx.test(this.mobile)) {
        return false;
      } else {
        return true;
      }
    },
    validateVertificationCode() {
      if (this.verificationCode.length === 6) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  .confirm-btn {
    margin-top: 20px;
  }
}
</style>