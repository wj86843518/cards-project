<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <!-- <swiper-slide class="swiper__item">
        <div class="pic1-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="dl-l" src="./pics/pic1/dl-l.png" />
          <img class="dl-r" src="./pics/pic1/dl-r.png" />
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
      </swiper-slide> -->
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
      left: 23px;
      right: 23px;
      top: 119px;
      width: calc(100vw - 46px);
    }
    .bg3 {
      position: absolute;
      top: 125px;
      left: 0;
      width: 100vw;
    }
    .bg4 {
      position: absolute;
      top: 228px;
      left: 24px;
      right: 24px;
      width: calc(100vw - 48px);
    }
    .dl-l {
      position: absolute;
      top: 148px;
      left: 56px;
      width: 64px;
    }
    .dl-r {
      position: absolute;
      top: 148px;
      right: 56px;
      width: 64px;
    }
    .txt1 {
      position: absolute;
      top: 437px;
      left: 69px;
      right: 69px;
      width: calc(100vw - 138px);
    }
    .txt2 {
      position: absolute;
      top: 512px;
      left: 135px;
      right: 135px;
      width: calc(100vw - 270px);
    }
    .txt3 {
      position: absolute;
      top: 543px;
      left: 138px;
      right: 138px;
      width: calc(100vw - 276px);
    }
    .input {
      position: absolute;
      top: 561px;
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
      left: 67px;
      width: calc(100vw - 67px);
    }
    .bg3 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
    }
    .dl-l {
      position: absolute;
      left: 21px;
      top: 54px;
      width: 65px;
    }
    .dl-r {
      position: absolute;
      right: 21px;
      top: 54px;
      width: 65px;
    }
    .bg4 {
      position: absolute;
      top: 81px;
      left: 75px;
      right: 75px;
      width: calc(100vw - 150px);
    }
    .zf {
      position: absolute;
      top: 101px;
      left: 144px;
      right: 144px;
      width: calc(100vw - 288px);
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
      top: 306px;
      left: 94px;
      .niu {
        width: 97px;
      }
      .goods-counts-txt {
        position: absolute;
        left: 117px;
        width: 100px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color: #fddb8c;
      }
    }
    .btn {
      position: absolute;
      top: 538px;
      left: 111px;
      right: 111px;
      width: calc(100vw - 222px);
      &__bg {
        width: 100%;
      }
      &__txt {
        position: absolute;
        width: 43px;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    }
    .bg5 {
      position: absolute;
      top: 593px;
      left: 52px;
      right: 52px;
      width: calc(100vw - 104px);
    }
  }
}
</style>