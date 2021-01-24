<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper__item">
        <div class="pic1-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="txt1" src="./pics/pic1/txt1.png" />
          <img class="txt2" src="./pics/pic1/txt2.png" />
          <img class="txt3" src="./pics/pic1/txt3.png" />
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
          <img class="bg2" src="./pics/pic2/bg2.png" />
          <img class="bg3" src="./pics/pic2/bg3.png" />
          <img class="dl-l" src="./pics/pic2/dl-l.png" />
          <img class="dl-r" src="./pics/pic2/dl-r.png" />
          <img class="bg4" src="./pics/pic2/bg4.png" />
          <img class="zf" src="./pics/pic2/zf.png" />
          <p class="content">{{ content }}</p>
          <div class="good">
            <img class="niu" src="./pics/pic2/niu.png" />
            <p class="goods-counts-txt">
              {{ goodsCountsTxt }}
            </p>
          </div>
          <div class="btn" @click="toWeixin">
            <img class="btn__bg" src="./pics/pic2/btn-bg.png" />
            <img
              v-if="flag === '1'"
              class="btn__txt"
              src="./pics/pic2/zs.png"
            />
            <img v-else class="btn__txt" src="./pics/pic2/hl.png" />
          </div>
          <img class="bg5" src="./pics/pic2/bg5.png" />
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
      value: "元宵闹花灯，送你五盏吉祥灯",
      content: "各色汤圆随您挑，撸起袖子加油干。某某某祝您牛年大发！",
      goodsCountsTxt: "金牛一座",
      flag: "1",
    };
  },
  mounted() {},
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
  .pic1-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic1/bg1.png");
    .bg2 {
      position: absolute;
      top: 108px;
      left: 15px;
      right: 15px;
      width: calc(100vw - 30px);
    }
    .bg3 {
      position: absolute;
      top: 110px;
      left: 0;
      width: 100vw;
    }
    .bg4 {
      position: absolute;
      top: 220px;
      left: 15px;
      right: 15px;
      width: calc(100vw - 30px);
    }
    .txt1 {
      position: absolute;
      top: 440px;
      left: 70px;
      right: 70px;
      width: calc(100vw - 140px);
    }
    .txt2 {
      position: absolute;
      top: 500px;
      left: 130px;
      right: 130px;
      width: 115px;
      width: calc(100vw - 260px);
    }
    .txt3 {
      position: absolute;
      top: 535px;
      left: 130px;
      right: 130px;
      width: calc(100vw - 260px);
    }
    .input {
      position: absolute;
      top: 560px;
      left: 40px;
      right: 40px;
      width: calc(100vw - 80px);
      &__item {
        background-color: transparent;
        font-size: 20px;
        ::v-deep .van-field__control {
          color: #fddb8c;
        }
      }
    }
  }
  .pic2-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic2/bg1.png");
    .bg2 {
      position: absolute;
      top: 0;
      left: 40px;
      width: calc(100vw - 40px);
    }
    .bg3 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
    }
    .dl-l {
      position: absolute;
      left: 20px;
      top: 60px;
      width: 60px;
    }
    .dl-r {
      position: absolute;
      right: 20px;
      top: 60px;
      width: 56px;
    }
    .bg4 {
      position: absolute;
      top: 90px;
      left: 70px;
      right: 70px;
      width: calc(100vw - 140px);
    }
    .zf {
      position: absolute;
      top: 110px;
      left: 140px;
      right: 140px;
      width: calc(100vw - 280px);
    }
    .content {
      position: absolute;
      top: 200px;
      left: 60px;
      right: 60px;
      width: calc(100vw - 120px);
      font-size: 20px;
      text-indent: 40px;
      color: #fddb8c;
    }
    .good {
      position: absolute;
      top: 300px;
      left: 80px;
      .niu {
        width: 100px;
      }
      .goods-counts-txt {
        position: absolute;
        left: 120px;
        width: 100px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color: #fddb8c;
      }
    }
    .btn {
      position: absolute;
      top: 510px;
      left: 120px;
      right: 120px;
      width: calc(100vw - 240px);
      &__bg {
        width: 100%;
      }
      &__txt {
        position: absolute;
        width: 80px;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    }
    .bg5 {
      position: absolute;
      top: 570px;
      left: 60px;
      right: 60px;
      width: calc(100vw - 120px);
    }
  }
}
</style>