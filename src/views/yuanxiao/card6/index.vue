<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper__item">
        <div class="pic1-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <img class="dl" src="./pics/pic1/dl.png" />
          <img class="txt1" src="./pics/pic1/txt1.png" />
          <img class="txt2" src="./pics/pic1/txt2.png" />
          <img class="txt3" src="./pics/pic1/txt3.png" />
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="bg5" src="./pics/pic1/bg5.png" />
          <img class="bg6" src="./pics/pic1/bg6.png" />
          <img class="bg7" src="./pics/pic1/bg7.png" />
          <img class="txt4" src="./pics/pic1/txt4.png" />
          <div class="input">
            <van-field
              class="input__item"
              v-model="value"
              placeholder="请输入"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swipe__item">
        <div class="pic2-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <img class="dl" src="./pics/pic1/dl.png" />
          <img class="bg4" src="./pics/pic2/bg4.png" />
          <img class="txt1" src="./pics/pic2/txt1.png" />
          <img class="txt2" src="./pics/pic2/txt2.png" />
          <div class="textarea">
            <van-field
              class="textarea__item"
              v-model="content"
              rows="4"
              autosize
              type="textarea"
            />
          </div>
          <img class="bg5" src="./pics/pic2/bg5.png" />
          <img class="txt3" src="./pics/pic2/txt3.png" />
          <img v-if="flag === '1'" class="zf" src="./pics/pic2/zf.png" />
          <img v-else class="hl" src="./pics/pic2/hl.png" />
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
      mesage1: "-在家过个团团圆圆的元宵节-",
      mesage2: "- 节日祝福 -",
      value: "某某某恭贺您元宵佳节阖家团圆",
      content:
        "正 月 里 来 是 新 春 十 五 花 灯 闹 乾 坤 大 红 灯 笼 高 高 挂 欢 欢 喜 喜 过 元 宵 汤 圆 味 美 香 喷 喷 祝 你 佳 节 福 满 身 好 运 和 你 不 离 分 万 事 如 意 永 开 心 恭 贺 您 元 宵 节 阖 家 快 乐",
      goodsCountsTxt: "金牛一座",
      flag: "2",
    };
  },
  mounted() {
    //todo  少个背景图
  },
  methods: {
    toWeixin() {
      // document.location.href = "weixin://wap/pay?prepayid='12334'pac";
      window.location.href =
        "weixin://wap/pay?appid=wxf5b5e87a6a0fde94&noncestr=123&package=123&prepayid=wx20141203201153d7bac0d2e10889028866&sign=6AF4B69CCC30926F85770F900D098D64&timestamp=1417511263";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../style/common.scss";
.container {
  @include w-h-100;
  .swiper {
    @include w-h-100;
    &__item {
      @include w-h-100;
    }
  }
  .bg2 {
    height: 100vh;
    width: 100vw;
  }
  .bg3 {
    position: absolute;
    left: 0;
    top: 0;
    width: 177px;
  }
  .dl {
    position: absolute;
    right: 33px;
    top: 0;
    width: 61px;
    z-index: 2;
  }

  .pic1-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic1/bg1.png");
    .txt1 {
      position: absolute;
      top: 73px;
      width: 86px;
      @include center-x;
    }
    .txt2 {
      position: absolute;
      top: 151px;
      left: 117px;
      width: 25px;
    }
    .txt3 {
      position: absolute;
      top: 151px;
      right: 117px;
      width: 25px;
    }
    .bg4 {
      position: absolute;
      top: 151px;
      @include center-x-y;
      width: 204px;
      z-index: 2;
    }
    .bg5 {
      position: absolute;
      left: 91px;
      top: 376px;
      width: 187px;
      z-index: 1;
    }
    .bg6 {
      position: absolute;
      top: 343px;
      width: 100vw;
    }
    .bg7 {
      position: absolute;
      top: 439px;
      width: 100vw;
    }
    .txt4 {
      position: absolute;
      top: 487px;
      width: 188px;
      @include center-x;
    }
    .input {
      position: absolute;
      top: 535px;
      left: 32px;
      right: 32px;
      width: calc(100vw - 64px);
      &__item {
        background-color: transparent;
        font-size: 16px;
        ::v-deep .van-field__control {
          color: #e6d3a8;
          text-align: center;
        }
      }
    }
  }
  .pic2-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic1/bg1.png");
    .bg4 {
      position: absolute;
      top: 89px;
      left: 28px;
      right: 28px;
      width: calc(100vw - 56px);
      z-index: 1;
    }
    .txt1 {
      position: absolute;
      top: 107px;
      width: 148px;
      @include center-x;
    }
    .txt2 {
      position: absolute;
      top: 108px;
      width: 104px;
      @include center-x;
    }
    .textarea {
      position: absolute;
      top: 168px;
      left: 41px;
      right: 41px;
      width: calc(100vw - 82px);
      &__item {
        background-color: transparent;
        font-size: 16px;
        ::v-deep .van-field__control {
          color: #fddb8c;
          text-align: center;
        }
      }
    }
    .bg5 {
      position: absolute;
      top: 375px;
      @include center-x;
      width: 140px;
    }
    .txt3 {
      position: absolute;
      top: 520px;
      @include center-x;
      width: 113px;
    }

    .zf {
      position: absolute;
      top: 528px;
      @include center-x;
      width: 50px;
    }
    .hl {
      position: absolute;
      top: 528px;
      @include center-x;
      width: 100px;
    }
  }
}
</style>