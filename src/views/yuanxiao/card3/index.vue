<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper__item">
        <div class="pic1-container">
          <img class="bg2" src="./pics/pic1/bg2.png" />
          <img class="bg3" src="./pics/pic1/bg3.png" />
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="bg5" src="./pics/pic1/bg5.png" />
          <div class="txt1">
            <img class="txt1__item1" src="./pics/pic1/txt1.png" />
            <img class="txt1__yuan" src="./pics/pic1/yuan.png" />
            <img class="txt1__xiao" src="./pics/pic1/xiao.png" />
            <img class="txt1__jia" src="./pics/pic1/jia.png" />
            <img class="txt1__jie" src="./pics/pic1/jie.png" />
          </div>
          <div class="txt2">
            <div class="txt2__item1">
              <img class="txt2__item1__txt2" src="./pics/pic1/txt2.png" />
              <img class="txt2__item1__zdjc" src="./pics/pic1/zdjc.png" />
              <img class="txt2__item1__txt3" src="./pics/pic1/txt3.png" />
            </div>
            <img class="txt2__item2" src="./pics/pic1/yxjj.png" />
            <div class="txt2__item3">
              <img class="txt2__item3__nnls" src="./pics/pic1/nnls.png" />
              <img class="txt2__item3__hdjc" src="./pics/pic1/hdjc.png" />
              <img class="txt2__item3__ryys" src="./pics/pic1/ryys.png" />
            </div>
          </div>
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
          <img class="bg4" src="./pics/pic1/bg4.png" />
          <img class="bg5" src="./pics/pic1/bg5.png" />
          <img class="zf" src="./pics/pic2/zf.png" />
          <div class="content">
            <img class="content__jx1" src="./pics/pic2/jx1.png" />
            <img class="content__jx2" src="./pics/pic2/jx2.png" />
            <div class="content__item">
              <van-field
                v-model="content"
                rows="5"
                autosize
                type="textarea"
                placeholder="请输入留言"
              />
              <img class="content__item__bg5" src="./pics/pic2/bg5.png" />
              <div class="content__item__btn">
                <img
                  class="content__item__btn__bg"
                  src="./pics/pic2/btn-bg.png"
                />
                <img
                  v-if="flag === '1'"
                  class="content__item__btn__zs"
                  src="./pics/pic2/zs.png"
                />
                <img v-else class="btn__zs" src="./pics/pic2/hl.png" />
              </div>
            </div>
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
      value: "某某某祝你元宵节快乐",
      content:
        "看着你吃完元宵的眼，透着心里的甜；看着你吃完元宵的脸，笑容明艳艳；看着你吃完元宵的肚子，哇！好圆！元宵虽好，可不要贪食哦——元宵节快乐！",
      goodsCountsTxt: "金牛一座",
      flag: "1",
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
    .bg2 {
      position: absolute;
      right: 0;
      top: 40px;
      width: 150px;
    }
    .bg3 {
      position: absolute;
      right: 60px;
      left: 60px;
      top: 150px;
      width: calc(100vw - 120px);
    }
    .bg4 {
      position: absolute;
      right: 0;
      top: 370px;
      width: 200px;
    }
    .bg5 {
      position: absolute;
      right: 50px;
      top: 350px;
      width: 150px;
    }
    .pic1-container {
      height: 100vh;
      width: 100vw;
      // @include setBg("./pics/pic1/bg1.png");

      .txt1 {
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 150px;
        &__item1 {
          position: absolute;
          width: 100%;
        }
        &__yuan {
          position: absolute;
          top: 3px;
          left: 2px;
          width: 22px;
        }
        &__xiao {
          position: absolute;
          top: 3px;
          left: 43px;
          width: 22px;
        }
        &__jia {
          position: absolute;
          top: 3px;
          left: 83px;
          width: 22px;
        }
        &__jie {
          position: absolute;
          top: 3px;
          left: 125px;
          width: 22px;
        }
      }
      .txt2 {
        position: absolute;
        top: 180px;
        width: 100vw;
        &__item1 {
          position: absolute;
          top: 0;
          left: 90px;
          &__txt2 {
            width: 40px;
          }
          &__zdjc {
            position: absolute;
            width: 21px;
            top: 6px;
            left: 9px;
          }
          &__txt3 {
            width: 30px;
            position: relative;
            top: 10px;
            left: 6px;
          }
        }
        &__item2 {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          width: 50px;
        }
        &__item3 {
          position: absolute;
          top: 0;
          right: 90px;
          &__nnls {
            width: 20px;
          }
          &__hdjc {
            width: 20px;
            margin-top: 20px;
          }
          &__ryys {
            width: 20px;
            margin-top: 20px;
          }
        }
      }
      .input {
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        &__item {
          background-color: transparent;
          font-size: 16px;
          ::v-deep .van-field__control {
            color: #7d4d2e;
            text-align: center;
          }
        }
      }
    }
  }

  .pic2-container {
    height: 100vh;
    width: 100vw;
    // @include setBg("./pics/pic2/bg1.png");
    .zf {
      position: absolute;
      right: 100px;
      left: 100px;
      top: 80px;
      width: calc(100vw - 200px);
    }
    .content {
      position: absolute;
      right: 45px;
      left: 45px;
      top: 140px;
      width: calc(100vw - 90px);
      &__jx1 {
        width: 100%;
      }
      &__jx2 {
        position: absolute;
        width: 92%;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
      &__item {
        position: absolute;
        top: 30px;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        &__bg5 {
          width: 100%;
          margin-top: 50px;
        }
        &__btn {
          width: 60%;
          margin: auto;
          margin-top: 50px;
          &__bg {
            width: 100%;
          }
          &__zs {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            bottom: 5px;
          }
        }
      }
    }
    ::v-deep .van-cell {
      padding: 5px;
      .van-field__control {
        font-size: 14px;
        color: #edb10c;
        text-align: left;
      }
    }
  }
}
</style>