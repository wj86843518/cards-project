<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="page1">
          <div class="top-decoration"></div>
          <div class="center-bg"></div>
          <div class="center-2021"></div>
          <div class="center-text"></div>
          <div class="blessing-box">
            <div class="blessing-input blessing-input-1 editable-text">
              <van-field
                v-model="page1Input1"
                placeholder=""
                :border="false"
                bind:change="onPage1Inpu1Change"
              />
            </div>
            <div class="blessing-input blessing-input-2 editable-text">
              <van-field
                v-model="page1Input2"
                placeholder=""
                :border="false"
                bind:change="onPage1Input2Change"
              />
            </div>
          </div>
          <div class="cloud1"></div>
          <div class="cloud2"></div>
          <div class="flower1"></div>
          <div class="flower2"></div>
          <div class="ox"></div>
          <div class="bottom-decoration"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper__item">
        <div class="page2">
          <div class="top-decoration"></div>
          <div class="center-bg"></div>
          <div class="blessing-box">
            <div class="blessing-input editable-text">
              <van-field
                v-model="page2Input1"
                placeholder=""
                :border="false"
                type="textarea"
                autosize
                bind:change="onPage2Input1Change"
              />
            </div>
          </div>
          <div class="present"></div>
          <div class="gloden-ox"></div>
          <div class="gloden-ox-text"></div>
          <div class="flower1"></div>
          <div class="flower2"></div>
          <div class="bottom-decoration"></div>
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
      page1Input1: "新年将至，献上一份祝福",
      page1Input2: "xxx恭祝您新年快乐！",
      page2Input1:
        "某某某略备薄礼，敬请笑纳。祝您：牛年万事如意，阖家幸福安康！",
    };
  },
  mounted() {},
  methods: {
    onPage1Inpu1Change() {},
    onPage1Inpu2Change() {},
    onPage2Inpu1Change() {},
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
  .page2,
  .page1 {
    height: 100vh;
    width: 100vw;
    background: url("../../assets/yearGreeting/card9/bg1.png");
    background-size: cover;
    .top-decoration {
      width: 100vw;
      height: 140px;
      background: url("../../assets/yearGreeting/card9/top-decoration.png");
      background-size: cover;
      position: relative;
      z-index: 10;
    }
    .bottom-decoration {
      width: 150vw;
      height: 200px;
      background: url("../../assets/yearGreeting/card9/bottom-decoration.png");
      background-size: cover;
      position: absolute;
      bottom: 0;
      left: -100px;
      z-index: 20;
    }
  }
  .page1 {
    .center-bg {
      width: 340px;
      height: 400px;
      background: url("../../assets/yearGreeting/card9/bg2.png");
      background-size: cover;
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }
    .center-2021 {
      width: 140px;
      height: 60px;
      background: url("../../assets/yearGreeting/card9/2021.png");
      background-size: cover;
      position: absolute;
      top: 115px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
    }
    .center-text {
      width: 180px;
      height: 140px;
      background: url("../../assets/yearGreeting/card9/center-text.png");
      background-size: cover;
      position: absolute;
      top: 200px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
    }
    .blessing-box {
      width: 180px;
      height: 50px;
      position: absolute;
      top: 350px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      .blessing-input {
        text-align: center;
        color: #ffffc9;
        ::v-deep .van-field__control {
          text-align: center;
        }
      }
      .blessing-input-1 {
        ::v-deep .van-field__control {
          font-size: 16px;
        }
      }
      .blessing-input-2 {
        ::v-deep .van-field__control {
          font-size: 14px;
        }
      }
    }
    .cloud1 {
      width: 280px;
      height: 160px;
      background: url("../../assets/yearGreeting/card9/cloud1.png");
      background-size: cover;
      position: absolute;
      top: 400px;
      left: -50px;
    }
    .cloud2 {
      width: 200px;
      height: 100px;
      background: url("../../assets/yearGreeting/card9/cloud2.png");
      background-size: cover;
      position: absolute;
      top: 470px;
      right: 0;
    }
    .flower1 {
      width: 100px;
      height: 120px;
      background: url("../../assets/yearGreeting/card9/flower1.png");
      background-size: cover;
      position: absolute;
      top: 440px;
      left: 25px;
      z-index: 30;
    }
    .flower2 {
      width: 100px;
      height: 120px;
      background: url("../../assets/yearGreeting/card9/flower2.png");
      background-size: cover;
      position: absolute;
      top: 440px;
      right: 25px;
      z-index: 30;
    }
    .ox {
      width: 150px;
      height: 190px;
      background: url("../../assets/yearGreeting/card9/ox1.png");
      background-size: cover;
      position: absolute;
      top: 440px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 30;
    }
  }
  .page2 {
    .center-bg {
      width: 430px;
      height: 510px;
      background: url("../../assets/yearGreeting/card9/bg2.png");
      background-size: cover;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
    }
    .blessing-box {
      width: 200px;
      position: absolute;
      top: 160px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      .blessing-input {
        color: #ffffc9;
        ::v-deep .van-field__control {
          font-family: FZYaoTi;
          font-size: 16px;
        }
      }
    }
    .present {
      width: 130px;
      height: 41px;
      background: url("../../assets/yearGreeting/card9/button.png");
      background-size: cover;
      position: absolute;
      top: 420px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
    }
    .gloden-ox {
      width: 90px;
      height: 110px;
      background: url("../../assets/yearGreeting/card9/ox2.png");
      background-size: cover;
      position: absolute;
      top: 270px;
      left: 100px;
      z-index: 50;
    }
    .gloden-ox-text {
      width: 70px;
      height: 20px;
      background: url("../../assets/yearGreeting/card9/ox-text.png");
      background-size: cover;
      position: absolute;
      top: 320px;
      left: 205px;
      z-index: 50;
    }
    .flower1 {
      width: 160px;
      height: 180px;
      background: url("../../assets/yearGreeting/card9/flower1.png");
      background-size: cover;
      position: absolute;
      bottom: -30px;
      left: -50px;
      z-index: 30;
    }
    .flower2 {
      width: 160px;
      height: 180px;
      background: url("../../assets/yearGreeting/card9/flower2.png");
      background-size: cover;
      position: absolute;
      bottom: -30px;
      right: -50px;
      z-index: 30;
    }
  }

  .editable-text {
    .van-cell {
      background-color: transparent;
      padding: 0;
    }
    ::v-deep .van-field__control {
      color: #ffffc9;
      font-size: 12px;
    }
  }
}
</style>