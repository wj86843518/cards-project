<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="box1">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/chuwu/card1/bg.png')"
            />
          </div>
          <div class="box1-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo1.png')"
            />
          </div>
          <div class="box1-logo2">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo2.png')"
            />
          </div>
          <div class="box1-logo3">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo3.png')"
            />
          </div>
          <div class="box1-logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo4.png')"
            />
          </div>
          <div class="box1-logo5">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo5.png')"
            />
          </div>
          <div class="box1-logo6">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo6.png')"
            />
          </div>
          <div class="box1-logo7">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo7.png')"
            />
          </div>
          <div class="box1-logo8">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo8.png')"
            />
          </div>
          <div class="content">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/content.png')"
            />
          </div>
          <div class="content-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/content-logo1.png')"
            />
          </div>
          <div class="content-logo2">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/content-logo2.png')"
            />
          </div>
          <div class="content-logo3">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/content-logo3.png')"
            />
          </div>
          <div class="content-logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/content-logo4.png')"
            />
          </div>
          <div class="content-word">财神牵着金牛到/赶紧开门迎财神</div>
        </div>
      </swiper-slide>
      <swiper-slide>
          <div class="box1">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/chuwu/card1/bg.png')"
            />
          </div>
          <div class="box1-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo1.png')"
            />
          </div>
          <div class="box1-logo2">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo2.png')"
            />
          </div>
          <div class="box1-logo3">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo3.png')"
            />
          </div>
          <div class="box1-logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo4.png')"
            />
          </div>
          <div class="box1-logo5">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo5.png')"
            />
          </div>
          <div class="box1-logo6">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo6.png')"
            />
          </div>
          <div class="box1-logo7">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box1-logo7.png')"
            />
          </div>
          <div class="content">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/content.png')"
            />
          </div>
          <div class="box2-logo1">
              <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box2-logo1.png')"
            />
          </div>
          <div class="box2-logo2">
              <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card1/box2-logo2.png')"
            />
          </div>
          <div class="send-word">
              <van-field
                type="textarea"
                v-model="sendWord"
                :border="false"
                autosize
                center
                input-align="center"
              />
            </div>
            <div class="button-box"></div>
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
      sendWord: '琳琅满目都是礼，挥汗如雨为了你。老板真牛，给我一份会礼吧。'
    };
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
}
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.bg-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.box1 {
  .box1-logo1 {
    position: absolute;
    width: 100%;
    height: 101px;
    left: 0;
    top: 0;
  }
  .box1-logo2 {
    position: absolute;
    width: 115px;
    height: 108px;
    left: 5px;
    top: 0;
  }
  .box1-logo3 {
    position: absolute;
    width: 100px;
    height: 93px;
    right: 21px;
    top: 0;
  }
  .box1-logo4 {
    position: absolute;
    width: 50px;
    height: 166px;
    left: 0;
    top: 126px;
  }
  .box1-logo5 {
    position: absolute;
    width: 71px;
    height: 191px;
    right: 0;
    top: 267px;
  }
  .box1-logo6 {
    position: absolute;
    width: 6px;
    height: 110px;
    right: 26px;
    top: 76px;
  }
  .box1-logo7 {
    position: absolute;
    width: 100%;
    height: 110px;
    left: 0;
    bottom: 0;
  }
    .box1-logo8 {
    position: absolute;
    width: 39px;
    height: 20px;
    left: 32px;
    top: 381px;
  }
  .content {
    position: absolute;
    width: 287px;
    height: 487px;
    left: 45px;
    top: 76px;
  }
  .content-logo1 {
    position: absolute;
    width: 267px;
    height: 79px;
    top: 93px;
    left: 54px;
  }
  .content-logo2 {
    position: absolute;
    width: 259px;
    height: 85px;
    top: 172px;
    left: 57px;
  }
  .content-logo3 {
    position: absolute;
    width: 93px;
    height: 22px;
    top: 275px;
    left: 141px;
  }
  .content-logo4 {
    position: absolute;
    width: 234px;
    height: 203px;
    top: 310px;
    left: 71px;
  }
  .content-word {
    position: absolute;
    width: 100%;
    left: 0;
    top: 519px;
    text-align: center;
    height: 22px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 21px;
    color: #feda7d;
  }
}
.box2-logo1{
    position: absolute;
    width: 107px;
    height: 21px;
    left: 134px;
    top:100px;
}
.box2-logo2{
    position: absolute;
    width: 211px;
    height: 20px;
    left: 82px;
    top:143px;
}
.send-word ::v-deep .van-cell {
  background-color: transparent;
  padding: 0;
}
.send-word ::v-deep .van-field__control {
  
font-size: 16px;
font-family: PingFang SC;
font-weight: 500;
line-height: 21px;
color: #FEDA7D;
}
.send-word {
  position: absolute;
  top: 185px;
  left: 50%;
  transform: translate(-50%);
  width: 211px;
}
.button-box {
  position: absolute;
  width: 154px;
  height: 40px;
  left: 50%;
  top: 489px;
  transform: translate(-50%);
  background-image: url("../../assets/chuwu/card1/button-box.png");
  background-repeat: round;
}
</style>