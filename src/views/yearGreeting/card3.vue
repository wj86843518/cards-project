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
              :src="require('../../assets/yearGreeting/card3/bg.png')"
            />
          </div>
          <div class="box1-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/box1-logo1.png')"
            />
          </div>
          <div class="box1-logo2">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/box1-logo2.png')"
            />
          </div>
          <div class="box1-logo3">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/box1-logo3.png')"
            />
          </div>
          <div class="box1-logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/box1-logo4.png')"
            />
          </div>
          <div class="box1-logo5">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/box1-logo5.png')"
            />
          </div>
          <div class="box1-word">爆竹声中一岁除 春风送暖入屠苏</div>
          <div class="box1-changeWord">
            <van-field
              v-model="contentWord"
              :border="false"
              center
              input-align="center"
            />
          </div>
          <div class="contentBg">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/content.png')"
            />
            <div class="contentBg-logo1">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/contentBg-logo1.png')
                "
              />
            </div>
            <div class="contentBg-logo2">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/contentBg-logo2.png')
                "
              />
            </div>
            <div class="contentBg-logo3">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/contentBg-logo3.png')
                "
              />
            </div>
            <div class="contentBg-logo4">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/contentBg-logo4.png')
                "
              />
            </div>
            <div class="contentBg-logo5">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/contentBg-logo5.png')
                "
              />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box2">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/bg.png')"
            />
          </div>
          <div class="box2-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/box2-logo1.png')"
            />
          </div>
          <div class="box2-content">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/box2-content.png')"
            />
            <div class="content-title">· 新 年 祝 福 ·</div>
            <div class="box2-content-logo1">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/box2-content-logo1.png')
                "
              />
            </div>
            <div class="box2-content-logo2">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/box2-content-logo2.png')
                "
              />
            </div>
            <div class="box2-content-logo3">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/card3/box2-content-logo3.png')
                "
              />
            </div>
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
            <div class="button-box"></div>
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
      contentWord: "~某某某祝您新年快乐~",
      sendWord:
        "       正月初一呈心意，希望我是第一个。某某某给您和您全家拜年啦！",
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
  width: 100vw;
}
.contentBg {
  position: absolute;
  left: 50%;
  top: 196px;
  transform: translate(-50%);
  width: 306px;
  .contentBg-logo1 {
    position: absolute;
    width: 20px;
    height: 21px;
    left: 50%;
    top: -30px;
    transform: translate(-50%);
  }
  .contentBg-logo2 {
    position: absolute;
    width: 47px;
    height: 27px;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .contentBg-logo3 {
    position: absolute;
    width: 32px;
    height: 107px;
    left: 50%;
    top: 59px;
    transform: translate(-50%);
  }
  .contentBg-logo4 {
    position: absolute;
    width: 14px;
    height: 56px;
    left: 0;
    bottom: 0;
    // transform: translate(-50%);
  }
  .contentBg-logo5 {
    position: absolute;
    width: 14px;
    height: 56px;
    right: 0;
    bottom: 0;
    // transform: translate(-50%);
  }
}
.box1 {
  .box1-logo1 {
    width: 33px;
    height: 17px;
    position: absolute;
    left: 30px;
    top: 76px;
  }
  .box1-logo2 {
    width: 9px;
    height: 33px;
    position: absolute;
    left: 30px;
    top: 98px;
  }
  .box1-logo3 {
    width: 40px;
    height: 17px;
    position: absolute;
    left: 50%;
    top: 78px;
    transform: translate(-50%);
  }
  .box1-logo4 {
    width: 104px;
    height: 24px;
    position: absolute;
    left: 50%;
    top: 102px;
    transform: translate(-50%);
  }
  .box1-logo5 {
    width: 22px;
    height: 39px;
    position: absolute;
    right: 29px;
    top: 76px;
  }
  .box1-word {
    width: 204px;
    height: 12px;
    position: absolute;
    left: 50%;
    top: 133px;
    transform: translate(-50%);
  }
  .box1-changeWord {
    position: absolute;
    width: 100%;
    left: 0;
    top: 574px;
  }
  .box1-changeWord ::v-deep .van-cell {
    background-color: transparent;
    padding: 0;
  }
  .box1-changeWord ::v-deep .van-field__control {
    height: 23px;
    font-size: 21px;
    font-family: STXingkai;
    font-weight: 400;
    line-height: 20px;
    color: #ffe993;
  }
}
.box2-logo1 {
  position: absolute;
  width: 138px;
  height: 31px;
  left: 50%;
  top: 84px;
  transform: translate(-50%);
}
.box2-content {
  position: absolute;
  width: 323px;
  height: 431px;
  left: 50%;
  top: 159px;
  transform: translate(-50%);
  .content-title {
    width: 172px;
    height: 45px;
    background-image: url("../../assets/yearGreeting/card3/contentTitle.png");
    line-height: 38px;
    position: absolute;
    left: 50%;
    top: 38px;
    transform: translate(-50%);
    font-size: 18px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #bd0f0d;
    background-repeat: round;
    text-align: center;
  }
  .box2-content-logo1 {
    position: absolute;
    width: 256px;
    height: 108px;
    left: 50%;
    top: 103px;
    transform: translate(-50%);
  }
  .box2-content-logo2 {
    position: absolute;
    width: 14px;
    height: 56px;
    left: 9px;
    bottom: 28px;
    // transform: translate(-50%);
  }
  .box2-content-logo3 {
    position: absolute;
    width: 14px;
    height: 56px;
    right: 9px;
    bottom: 28px;
    // transform: translate(-50%);
  }
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
  color: #ffe492;
}
.send-word {
  position: absolute;
  top: 235px;
  left: 50%;
  transform: translate(-50%);
  width: 252px;
}
.button-box {
  position: absolute;
  width: 123px;
  height: 36px;
  left: 50%;
  bottom: 24px;
  transform: translate(-50%);
  background-image: url("../../assets/yearGreeting/card3/button-box.png");
  background-repeat: round;
}
</style>