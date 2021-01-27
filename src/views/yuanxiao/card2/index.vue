<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper__item">
        <div class="pic1-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <div class="txt">
            <img class="txt__item1" src="./pics/pic1/txt1.png" />
            <img class="txt__item2" src="./pics/pic1/txt2.png" />
          </div>
          <img class="txt3" src="./pics/pic1/txt3.png" />
          <img class="bg5" src="./pics/pic1/bg5.png" />
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="txt4" src="./pics/pic1/txt4.png" />
        </div>
      </swiper-slide>
      <swiper-slide class="swipe__item">
        <div class="pic2-container">
          <img class="bg2" src="./pics/pic2/bg2.png" />
          <img class="bg3" src="./pics/pic2/bg3.png" />
          <img class="bg4" src="./pics/pic2/bg4.png" />
          <img class="zf" src="./pics/pic2/zf.png" />
          <img class="bg5" src="./pics/pic2/bg5.png" />
          <van-field
            class="content"
            v-model="content"
            rows="7"
            autosize
            type="textarea"
            placeholder="请输入留言"
          />
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
      content:
        "喜庆元宵佳节, 恭祝您 日圆，月圆，圆圆如意。 官源、财源，源源不断。 人缘、福缘，缘缘于手。 情愿、心愿，愿愿成真！ 元宵节快乐！",
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
      height: 100vh;
      width: 100vw;
    }
    .bg3 {
      position: absolute;
      right: 0;
      top: 0;
      width: 133px;
    }
    .txt {
      position: absolute;
      top: 96px;
      left: 50%;
      transform: translateX(-50%);
      width: 98px;
      &__item1 {
        width: 100px;
      }
      &__item2 {
        position: absolute;
        bottom: 30px;
        left: 6px;
        width: 19px;
      }
    }
    .txt3 {
      position: absolute;
      top: 278px;
      left: 50%;
      transform: translateX(-50%);
      width: 27px;
    }
    .bg5 {
      position: absolute;
      top: 394px;
      left: 50%;
      transform: translateX(-50%);
      width: 37px;
    }
    .bg4 {
      position: absolute;
      top: 429px;
      left: 50%;
      transform: translateX(-50%);
      width: 148px;
    }
    .txt4 {
      position: absolute;
      top: 477px;
      right: 38px;
      width: 37px;
    }
  }
  .pic2-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic2/bg1.png");
    .bg2,
    .bg3 {
      position: absolute;
      height: 100vh;
      width: 100vw;
    }
    .bg4 {
      position: absolute;
      right: 0;
      top: 0;
      width: 133px;
    }
    .zf {
      position: absolute;
      top: 90px;
      left: 50%;
      transform: translateX(-50%);
      width: 144px;
    }
    .bg5 {
      position: absolute;
      top: 97px;
      left: 31px;
      right: 31px;
      width: calc(100vw - 62px);
    }
    .content {
      position: absolute;
      top: 180px;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
    }
    ::v-deep .van-cell {
      padding: 5px;
      .van-field__control {
        font-size: 14px;
        color: #edb10c;
        text-align: center;
      }
    }
    .good {
      position: absolute;
      top: 368px;
      left: 94px;
      .niu {
        width: 97px;
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
  }
}
</style>