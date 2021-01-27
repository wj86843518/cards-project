<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <!-- <swiper-slide class="swiper__item">
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
      </swiper-slide> -->
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
  .bg2 {
    position: absolute;
    right: 0;
    top: 50px;
    width: 149px;
  }
  .bg3 {
    position: absolute;
    right: 67px;
    left: 67px;
    top: 136px;
    width: calc(100vw - 134px);
  }
  .bg4 {
    position: absolute;
    right: 0;
    top: 332px;
    width: 207px;
  }
  .bg5 {
    position: absolute;
    right: 68px;
    top: 320px;
    width: 147px;
  }
  .pic1-container {
    height: 100vh;
    width: 100vw;
    // @include setBg("./pics/pic1/bg1.png");
    .txt1 {
      position: absolute;
      top: 91px;
      left: 50%;
      transform: translateX(-50%);
      width: 139px;
      &__item1 {
        position: absolute;
        width: 100%;
      }
      &__yuan {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 21px;
      }
      &__xiao {
        position: absolute;
        top: 3px;
        left: 40px;
        width: 21px;
      }
      &__jia {
        position: absolute;
        top: 3px;
        left: 78px;
        width: 21px;
      }
      &__jie {
        position: absolute;
        top: 3px;
        left: 116px;
        width: 21px;
      }
    }
    .txt2 {
      position: absolute;
      top: 185px;
      width: 100vw;
      &__item1 {
        position: absolute;
        top: 0;
        left: 103px;
        &__txt2 {
          width: 40px;
        }
        &__zdjc {
          position: absolute;
          width: 21px;
          height: 143px;
          top: 5px;
          left: 9px;
        }
        &__txt3 {
          width: 32px;
          position: relative;
          top: 9px;
          left: 4px;
        }
      }
      &__item2 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 49px;
      }
      &__item3 {
        position: absolute;
        top: 0;
        right: 111px;
        &__nnls {
          width: 18px;
        }
        &__hdjc {
          width: 18px;
          margin-top: 22px;
        }
        &__ryys {
          width: 18px;
          margin-top: 22px;
        }
      }
    }
    .input {
      position: absolute;
      top: 554px;
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

  .pic2-container {
    height: 100vh;
    width: 100vw;
    // @include setBg("./pics/pic2/bg1.png");
    .zf {
      position: absolute;
      right: 96px;
      left: 96px;
      top: 81px;
      width: calc(100vw - 192px);
    }
    .content {
      position: absolute;
      right: 46px;
      left: 46px;
      top: 138px;
      width: calc(100vw - 92px);
      &__jx1 {
        width: 100%;
      }
      &__jx2 {
        position: absolute;
        width: 94%;
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
          position: absolute;
          top: 173px;
          width: 100%;
          // margin-top: 50px;
        }
        &__btn {
          position: absolute;
          top: 347px;
          // bottom: 20px;
          width: 154px;
          height: 40px;
          @include center-x;
          // margin: auto;
          // margin-top: 50px;
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