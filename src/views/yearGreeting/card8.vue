<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="page1">
          <div class="text-2021"></div>
          <div class="new-year-eve"></div>
          <div class="blessing">
            <div class="blessing-input editable-text">
              <van-field
                v-model="page1Input1"
                placeholder=""
                :border="false"
                bind:change="onPage1Inpu1Change"
              />
            </div>
            <div class="blessing-input editable-text">
              <van-field
                v-model="page1Input2"
                placeholder=""
                :border="false"
                bind:change="onPage1Inpu2Change"
              />
            </div>
          </div>
          <div class="round"></div>
          <div class="clock"></div>
          <div class="pointer"></div>
          <div class="clock-text">
            <div class="clock-text-1">牛 年</div>
            <div class="clock-text-2">大 吉</div>
          </div>
          <div class="golden-ox-1"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper__item">
        <div class="page2">
          <div class="border"></div>
          <div class="text-2021"></div>
          <div class="blessing-input-1 editable-text">
            <van-field
              v-model="page2Input1"
              placeholder=""
              :border="false"
              type="textarea"
              autosize
              bind:change="onPage2Input1Change"
            />
          </div>
          <div class="gloden-ox-2"></div>
          <div class="gloden-ox-text"></div>
          <div class="present"></div>
          <div class="blessing-box">
            <div class="blessing-input-2 editable-text">
              <van-field
                v-model="page2Input2"
                placeholder=""
                :border="false"
                bind:change="onPage2Inpu2Change"
              />
            </div>
            <div class="blessing-input-2 editable-text">
              <van-field
                v-model="page2Input3"
                placeholder=""
                :border="false"
                bind:change="onPage2Inpu3Change"
              />
            </div>
          </div>
          <div class="golden-ox-1"></div>
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
      page1Input1: "大年三十夜",
      page1Input2: "喜庆中国年",
      page2Input1: "某某某略备薄礼，敬请笑纳。祝您牛年万事如意，阖家幸福安康！",
      page2Input2: "金牛送福",
      page2Input3: "好运新春",
    };
  },
  mounted() {},
  methods: {
    onPage1Inpu1Change() {},
    onPage1Inpu2Change() {},
    onPage2Inpu1Change() {},
    onPage2Inpu2Change() {},
    onPage2Inpu3Change() {},
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
  .page1,
  .page2 {
    height: 100vh;
    width: 100vw;
    background: url("../../assets/yearGreeting/card8/bg.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text-2021 {
      width: 140px;
      height: 60px;
      background: url("../../assets/yearGreeting/card8/2021.png");
      background-size: cover;
      position: absolute;
      top: 100px;
    }
  }
  .page1 {
    .new-year-eve {
      width: 82px;
      height: 30px;
      background: url("../../assets/yearGreeting/card8/new-year-eve.png");
      background-size: cover;
      position: absolute;
      top: 180px;
    }
    .blessing {
      width: 280px;
      height: 30px;
      position: absolute;
      top: 220px;
      display: flex;
      .blessing-input {
        color: #ffffc9;
        ::v-deep .van-field__control {
          text-align: center;
          font-family: PingFang SC;
          font-size: 19px;
        }
      }
    }
    .round {
      width: 280px;
      height: 280px;
      background: url("../../assets/yearGreeting/card8/round.png");
      background-size: cover;
      position: absolute;
      top: 280px;
    }
    .clock {
      width: 220px;
      height: 220px;
      background: url("../../assets/yearGreeting/card8/clock.png");
      background-size: cover;
      position: absolute;
      top: 310px;
    }
    .pointer {
      width: 60px;
      height: 100px;
      background: url("../../assets/yearGreeting/card8/pointer.png");
      background-size: cover;
      position: absolute;
      top: 340px;
      left: 45%;
    }
    .clock-text {
      width: 120px;
      height: 50px;
      position: absolute;
      top: 395px;
      font-size: 19px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .golden-ox-1 {
      width: 90px;
      height: 90px;
      background: url("../../assets/yearGreeting/card8/golden-ox1.png");
      background-size: cover;
      position: absolute;
      top: 470px;
    }
  }
  .page2 {
    .border {
      width: 80vw;
      height: 73vh;
      background: url("../../assets/yearGreeting/card8/border.png");
      background-size: cover;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .blessing-input-1 {
      position: absolute;
      top: 190px;
      color: #ffffc9;
      ::v-deep .van-field__control {
        font-family: PingFang SC;
        font-size: 19px;
      }
    }
    .gloden-ox-2 {
      width: 90px;
      height: 110px;
      background: url("../../assets/yearGreeting/card8/golden-ox2.png");
      background-size: cover;
      position: absolute;
      top: 280px;
      left: 100px;
      z-index: 50;
    }
    .gloden-ox-text {
      width: 70px;
      height: 20px;
      background: url("../../assets/yearGreeting/card8/ox-text.png");
      background-size: cover;
      position: absolute;
      top: 330px;
      left: 205px;
      z-index: 50;
    }
    .blessing-box {
      width: 280px;
      height: 30px;
      position: absolute;
      top: 530px;
      display: flex;
      .blessing-input-2 {
        color: #ffffc9;
        ::v-deep .van-field__control {
          text-align: center;
          font-family: PingFang SC;
          font-size: 19px;
        }
      }
    }
    .present {
      width: 130px;
      height: 41px;
      background: url("../../assets/yearGreeting/card8/button.png");
      background-size: cover;
      position: absolute;
      top: 460px;
      left: 50%;
      transform: translateX(-50%);
    }
    .golden-ox-1 {
      width: 60px;
      height: 60px;
      background: url("../../assets/yearGreeting/card8/golden-ox1.png");
      background-size: cover;
      position: absolute;
      top: 530px;
      left: 20px;
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