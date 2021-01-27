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
              :src="require('../../assets/yearGreeting/card4/bg.png')"
            />
          </div>
          <div class="box1-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card4/box1-logo1.png')"
            />
          </div>
          <div class="box1-word1">大年三十夜 喜庆中国年</div>
          <div class="box1-word2">某某某 恭贺新年</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box2">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/card4/bg.png')"
            />
          </div>
          <div class="logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card4/logo4.png')"
            />
          </div>
        </div>
        <div class="content">
          <van-image
            fit="fill"
            :src="require('../../assets/yearGreeting/card4/content.png')"
          />
          <div class="content-logo1">新年祝福</div>
          <div class="content-logo2">
            <van-image
              fit="fill"
              :src="
                require('../../assets/yearGreeting/card4/content-logo2.png')
              "
            />
          </div>
          <div class="content-animal-word">
            金牛一尊
          </div>
          <div class="end-word end-top">王旭东敬祝</div>
          <div class="end-word end-bottom">2020年十一月hi日</div>
          <div class="content-logo3"></div>
          <div class="send-word">
            <van-field
              type="textarea"
              v-model="sendWord"
              :border="false"
              autosize
              center
              input-align="center"
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
      contentWord: "?????",
      sendWord: "某某某略备薄礼，敬请笑纳。祝您：牛年万事如意，合家幸福安康！",
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
.box1-logo1 {
  position: absolute;
  width: 133px;
  height: 445px;
  right: 0;
  top: 110px;
}
.box1-word1 {
  position: absolute;
  width: 100%;
  height: 24px;
  font-size: 21px;
  font-family: STZhongsong;
  font-weight: 400;
  line-height: 25px;
  color: #d8c78d;
  text-align: center;
  left: 0;
  top: 565px;
}
.box1-word2 {
  position: absolute;
  width: 100%;
  height: 24px;
  font-size: 21px;
  font-family: STZhongsong;
  font-weight: 400;
  line-height: 25px;
  color: #d8c78d;
  text-align: right;
  right: 21px;
  top: 77px;
}
.content {
  position: absolute;
  width: 312px;
  height: 203px;
  position: absolute;
  left: 50%;
  top: 83px;
  transform: translate(-50%);
}
.content-logo1 {
  position: absolute;
  width: 130px;
  height: 20px;
  left: 50%;
  top: 32px;
  transform: translate(-50%);
  background-image: url("../../assets/yearGreeting/card4/content-logo1.png");
  background-repeat: round;
  font-size: 13px;
  font-family: STZhongsong;
  font-weight: 400;
  line-height: 20px;
  color: #d8c78d;
  text-align: center;
}
.send-word ::v-deep .van-cell {
  background-color: transparent;
  padding: 0;
}
.send-word ::v-deep .van-field__control {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 25px;

  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 25px;
  color: #000000;
}
.send-word {
  position: absolute;
  top: 78px;
  left: 50%;
  transform: translate(-50%);
  width: 252px;
}
.content-logo2 {
  position: absolute;
  top: 177px;
  left: 63px;
  width: 97px;
  height: 128px;
}
.content-animal-word {
  width: 100px;
  height: 25px;
  position: absolute;
  left: 180px;
  top: 241px;

  font-size: 18px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 25px;
  color: #9a0600;
  opacity: 1;
}
.content-logo3 {
  width: 119px;
  height: 38px;
  position: absolute;
  left: 50%;
  top: 398px;
  transform: translate(-50%);
  background-image: url("../../assets/yearGreeting/card4/content-logo3.png");
  background-repeat: round;
}
.logo4 {
  position: absolute;
  width: 248px;
  height: 146px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  z-index: 1;
}
.end-word{
    position: absolute;
    width: 100%;
    right: 36px;
    height: 20px;
    
font-size: 14px;
font-family: PingFang SC;
font-weight: 500;
line-height: 20px;
color: #000000;
text-align: right;
}
.end-top{
    top: 345px;
}
.end-bottom{
    top: 365px;
}
</style>