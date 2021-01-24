<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper__item">
        <div class="pic1-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <div class="txt1">
            <img class="txt1__bg" src="./pics/pic1/bg4.png" />
            <img class="txt1__txt" src="./pics/pic1/yuan.png" />
          </div>
          <div class="txt2">
            <img class="txt2__bg" src="./pics/pic1/bg5.png" />
            <img class="txt2__txt" src="./pics/pic1/xiao.png" />
          </div>
          <div class="txt3">
            <img class="txt3__bg" src="./pics/pic1/bg6.png" />
            <img class="txt3__txt" src="./pics/pic1/jia.png" />
          </div>
          <div class="txt4">
            <img class="txt4__bg" src="./pics/pic1/bg7.png" />
            <img class="txt4__txt" src="./pics/pic1/jie.png" />
          </div>
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <div class="input">
            <van-field
              class="input__item"
              v-model="value"
              placeholder="请输入"
            />
          </div>
          <img class="bg9" src="./pics/pic1/bg9.png" />
          <img class="bg8" src="./pics/pic1/bg8.png" />
        </div>
      </swiper-slide>
      <swiper-slide class="swipe__item">
        <div class="pic2-container">
          <img class="bg2" src="./pics/pic2/bg2.png" />
          <img class="bg3" src="./pics/pic2/bg3.png" />
          <img class="bg4" src="./pics/pic2/bg4.png" />
          <div class="txt1">
            <img class="txt1__bg" src="./pics/pic2/txt1.png" />
            <img class="txt1__txt" src="./pics/pic2/txt2.png" />
          </div>
          <div class="content">
            <img class="content__bg6" src="./pics/pic2/bg6.png" />
            <van-field
              class="content__input"
              v-model="content"
              rows="4"
              autosize
              type="textarea"
            />
            <!-- 赠送 -->
            <div class="content__btn">
              <img class="content__btn__bg" src="./pics/pic2/txt3.png" />
              <img
                v-if="flag === '1'"
                class="content__btn__txt"
                src="./pics/pic2/zs.png"
              />
              <img
                v-else
                class="content__btn__txt w-70"
                src="./pics/pic2/hl.png"
              />
            </div>
          </div>
          <img class="bg5" src="./pics/pic2/bg5.png" />
          <img class="bg6" src="./pics/pic2/bg5.png" />
          <img class="bg7" src="./pics/pic2/bg7.png" />
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
  .pic1-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic1/bg1.png");
    .bg2 {
      position: absolute;
      left: 0;
      top: 70px;
      width: 100px;
    }
    .txt1 {
      position: absolute;
      left: 30px;
      top: 50px;
      width: 110px;
      &__bg {
        width: 100%;
      }
      &__txt {
        position: absolute;
        width: 40px;
        top: 115px;
        left: 22px;
      }
    }
    .txt2 {
      position: absolute;
      top: 75px;
      left: 80px;
      width: 140px;
      z-index: 20;
      &__bg {
        width: 100%;
      }
      &__txt {
        position: absolute;
        top: 130px;
        width: 40px;
        left: 45px;
      }
    }
    .txt3 {
      position: absolute;
      left: 155px;
      top: 40px;
      width: 110px;
      z-index: 10;
      &__bg {
        width: 100%;
      }
      &__txt {
        position: absolute;
        top: 100px;
        left: 25px;
        width: 45px;
      }
    }
    .txt4 {
      position: absolute;
      left: 210px;
      top: 80px;
      width: 130px;
      &__bg {
        width: 100%;
      }
      &__txt {
        position: absolute;
        left: 52px;
        top: 105px;
        width: 35px;
      }
    }
    .bg3 {
      position: absolute;
      right: 0;
      top: 300px;
      width: 100px;
    }
    .input {
      position: absolute;
      top: 360px;
      left: 40px;
      right: 40px;
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
    .bg9 {
      position: absolute;
      left: 20px;
      top: 430px;
      width: 80px;
    }
    .bg8 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 450px;
      width: 180px;
    }
  }
  .pic2-container {
    height: 100vh;
    width: 100vw;
    @include setBg("./pics/pic1/bg1.png");
    .bg2 {
      position: absolute;
      left: 30px;
      right: 30px;
      top: 70px;
      bottom: 70px;
      width: calc(100vw - 60px);
      height: calc(100vh - 140px);
    }
    .bg3 {
      position: absolute;
      left: 0;
      top: 70px;
      width: 120px;
    }
    .bg4 {
      position: absolute;
      right: 0;
      top: 40px;
      width: 100px;
    }
    .txt1 {
      position: absolute;
      left: 110px;
      right: 110px;
      top: 100px;
      width: calc(100% - 220px);
      &__bg {
        width: 100%;
      }
      &__txt {
        top: 7px;
        position: absolute;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .content {
      position: absolute;
      left: 60px;
      right: 60px;
      top: 170px;
      width: calc(100% - 120px);
      &__bg6 {
        width: 100%;
      }
      &__input {
        margin-top: 20px;
      }
      ::v-deep .van-cell {
        padding: 5px;
        .van-field__control {
          font-size: 14px;
          color: #edb10c;
          text-align: center;
        }
      }
      &__btn {
        position: relative;
        margin: auto;
        margin-top: 30px;
        width: 100px;
        &__bg {
          width: 100px;
        }
        &__txt {
          position: absolute;
          width: 50px;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
        .w-70 {
          width: 70px;
        }
      }
    }
    .bg5 {
      position: absolute;
      width: 100px;
      left: -20px;
      top: 550px;
    }
    .bg6 {
      position: absolute;
      width: 100px;
      right: -40px;
      top: 550px;
    }
    .bg7 {
      position: absolute;
      width: 130px;
      left: 50%;
      transform: translateX(-50%);
      top: 550px;
      margin-left: 10px;
    }
  }
}
</style>