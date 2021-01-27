<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="box1">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/bg.png')"
            />
          </div>
          <div class="content-box">
            <van-image
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/content.png')"
            />
          </div>
          <div class="box1-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo1.png')"
            />
          </div>
          <div class="box1-logo2">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo2.png')"
            />
          </div>
          <div class="box1-logo3">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo3.png')"
            />
          </div>
          <div class="box1-logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo4.png')"
            />
          </div>
          <div class="box1-logo5">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo5.png')"
            />
          </div>
          <div class="box1-logo6">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo6.png')"
            />
          </div>
          <div class="box1-logo7">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo7.png')"
            />
          </div>
          <div class="box1-logo8">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/box1-logo8.png')"
            />
          </div>
          <div class="box1-word1">新春快乐·牛年大吉</div>
          <div class="box1-word2">
            <van-field
              v-model="contentWord"
              :border="false"
              center
              input-align="center"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
          <div class="box1">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/card5/bg.png')"
            />
          </div>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
      },
      contentWord: "某某某祝您新春快乐",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/common.scss";
.container {
  @include w-h-100;
  .swiper {
    @include w-h-100;
    &__item {
      @include w-h-100;
    }
  }
}
.box1,
.box2 {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.bg-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.content-box {
  position: absolute;
  left: 50%;
  top: 0;
  width: 250px;
  height: 100vh;
  transform: translate(-50%);
}
.box1-logo1 {
  position: absolute;
  width: 132px;
  height: 56px;
  top: 76px;
  left: 50%;
  transform: translate(-50%);
}
.box1-logo2 {
  position: absolute;
  width: 108px;
  height: 234px;
  top: 11px;
  left: 9px;
}
.box1-logo3 {
  position: absolute;
  width: 50px;
  height: 84px;
  top: 77px;
  right: 52px;
}
.box1-logo4 {
  position: absolute;
  width: 62px;
  height: 71px;
  top: 105px;
  right: 25px;
}
.box1-logo5 {
  position: absolute;
  width: 226px;
  height: 303px;
  top: 140px;
  left: 50%;
  transform: translate(-50%);
}
.box1-logo6 {
  position: absolute;
  width: 120px;
  height: 118px;
  bottom: 64px;
  left: 50%;
  transform: translate(-50%);
}
.box1-logo7 {
  position: absolute;
  width: 100%;
  height: 151px;
  bottom: 0;
  left: 0;
}
.box1-logo8 {
  position: absolute;
  width: 153px;
  height: 144px;
  top: 32px;
  right: 0;
}
.box1-word1 {
  position: absolute;
  width: 100%;
  top: 436px;
  left: 0;
  height: 21px;
  font-size: 21px;
  font-family: STXinwei;
  font-weight: 400;
  line-height: 25px;
  color: #ffefc7;
  text-align: center;
}
.box1-word2 {
  position: absolute;
  width: 100%;
  left: 0;
  top: 461px;
}
.box1-word2 ::v-deep .van-cell {
  background-color: transparent;
  padding: 0;
}
.box1-word2 ::v-deep .van-field__control {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 25px;
  color: #ffefc7;
}
</style>