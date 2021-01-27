<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper__item">
        <div class="pic1-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="bg5" src="./pics/pic1/bg5.png" />
          <img class="bg6" src="./pics/pic1/bg6.png" />
          <img class="bg7" src="./pics/pic1/bg7.png" />
          <img class="yun1" src="./pics/pic1/yun1.png" />
          <img class="yun2" src="./pics/pic1/yun2.png" />
          <div class="content">
            <div class="content__txt1">
              <img class="content__txt1__dai" src="./pics/pic1/dai.png" />
              <img class="content__txt1__zai" src="./pics/pic1/zai.png" />
              <img class="content__txt1__jia" src="./pics/pic1/jia.png" />
            </div>
            <div class="content__txt2">
              <img class="content__txt2__txt" src="./pics/pic1/guo.png" />
              <img class="content__txt2__txt" src="./pics/pic1/yuan.png" />
              <img class="content__txt2__txt" src="./pics/pic1/xiao.png" />
            </div>
            <div class="content__txt3">
              <img src="./pics/pic1/txt1.png" />
              <p>{{ mesage1 }}</p>
            </div>
            <div class="input">
              <van-field
                class="input__item"
                v-model="value"
                placeholder="请输入"
              />
            </div>
            <img class="content__bg8" src="./pics/pic1/bg8.png" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swipe__item">
        <div class="pic2-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="bg5" src="./pics/pic1/bg5.png" />
          <img class="bg6" src="./pics/pic1/bg6.png" />
          <img class="bg7" src="./pics/pic1/bg7.png" />
          <img class="yun1" src="./pics/pic1/yun1.png" />
          <img class="yun2" src="./pics/pic1/yun2.png" />
          <div class="content">
            <div class="content__txt1">
              <img src="./pics/pic2/bg1.png" />
              <p>{{ mesage2 }}</p>
            </div>
            <div class="input">
              <van-field
                class="input__item"
                v-model="value"
                placeholder="请输入"
              />
            </div>
            <div class="content__bg3">
              <img class="content__bg3__1" src="./pics/pic2/bg3.png" />
              <img class="content__bg3__2" src="./pics/pic2/bg2.png" />
            </div>
            <div class="textarea">
              <van-field
                class="textarea__item"
                v-model="content"
                rows="4"
                autosize
                type="textarea"
              />
            </div>
            <div class="content__btn">
              <img class="content__btn__bg" src="./pics/pic2/btn-bg.png" />
              <img
                v-if="floag === '1'"
                class="content__btn__txt"
                src="./pics/pic2/zs.png"
              />
              <img
                v-else
                class="content__btn__txt w-80"
                src="./pics/pic2/hl.png"
              />
            </div>
          </div>
          <img class="qiu1" src="./pics/pic2/qiu1.png" />
          <img class="qiu2" src="./pics/pic2/qiu2.png" />
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
      value: "某某某祝你元宵节快乐",
      content:
        "看着你吃完元宵的眼，透着心里的甜；看着你吃完元宵的脸，笑容明艳艳；看着你吃完元宵的肚子，哇！好圆！元宵虽好，可不要贪食哦——元宵节快乐！",
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
    left: 5px;
    right: 5px;
    width: calc(100vw - 10px);
    top: -30px;
    z-index: 2;
  }
  .bg4 {
    position: absolute;
    top: 30px;
    width: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .bg5 {
    position: absolute;
    top: 0;
    width: 210px;
    left: -20px;
    z-index: 1;
  }
  .bg6 {
    position: absolute;
    top: 0;
    width: 210px;
    right: -20px;
    z-index: 1;
  }
  .bg7 {
    position: absolute;
    bottom: -40px;
    width: 100vw;
  }
  .yun1 {
    position: absolute;
    bottom: 70px;
    left: 0;
    width: 100px;
  }
  .yun2 {
    position: absolute;
    bottom: 70px;
    right: 0;
    width: 100px;
    z-index: 5;
  }
  .pic1-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic1/bg1.png");
    .content {
      position: absolute;
      top: 140px;
      width: 100%;
      &__txt1 {
        padding: 0 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &__dai {
          width: 65px;
        }
        &__zai {
          width: 50px;
        }
        &__jia {
          width: 65px;
        }
      }
      &__txt2 {
        padding: 0 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        &__txt {
          width: 65px;
        }
      }
      &__txt3 {
        position: relative;
        margin-top: 20px;
        padding: 0 40px;
        width: calc(100vw - 80px);
        img {
          width: 100%;
        }
        p {
          position: absolute;
          top: 3px;
          left: 50%;
          transform: translateX(-50%);
          color: #f50000;
          font-size: 14px;
        }
      }
      .input {
        margin-top: 10px;
        width: calc(100vw - 80px);
        margin: auto;
        &__item {
          background-color: transparent;
          font-size: 14px;
          ::v-deep .van-field__control {
            color: #fddb8c;
            text-align: center;
          }
        }
      }
      &__bg8 {
        width: calc(100vw - 160px);
        margin: auto;
        margin-top: 20px;
      }
    }
  }
  .pic2-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic1/bg1.png");
    .content {
      position: absolute;
      top: 90px;
      z-index: 5;
      &__txt1 {
        padding: 0 40px;
        img {
          width: 100%;
        }
        p {
          position: absolute;
          top: 3px;
          left: 50%;
          transform: translateX(-50%);
          color: #f50000;
          font-size: 14px;
        }
      }
      .input {
        margin-top: 10px;
        width: calc(100vw - 80px);
        margin: auto;
        &__item {
          background-color: transparent;
          font-size: 14px;
          ::v-deep .van-field__control {
            color: #fddb8c;
            text-align: center;
          }
        }
      }
      &__bg3 {
        position: relative;
        margin-top: 10px;
        width: calc(100vw - 80px);
        margin: auto;
        &__1 {
          width: 100%;
        }
        &__2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          width: calc(100vw - 86px);
        }
      }
      .textarea {
        margin: auto;
        margin-top: 20px;
        width: calc(100vw - 80px);
        &__item {
          background-color: transparent;
          font-size: 16px;
          ::v-deep .van-field__control {
            color: #fddb8c;
            text-align: center;
          }
        }
      }
      &__btn {
        position: relative;
        margin: auto;
        margin-top: 40px;
        width: 120px;
        &__bg {
          width: 100%;
        }
        &__txt {
          @include center-x-y;
          width: 50px;
        }
        .w-80 {
          width: 80px;
        }
      }
    }
    .qiu1 {
      position: absolute;
      bottom: 30px;
      left: 40px;
      width: 15px;
    }
    .qiu2 {
      position: absolute;
      bottom: 110px;
      right: 80px;
      width: 30px;
      z-index: 1;
    }
  }
}
</style>