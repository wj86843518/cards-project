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
              :src="require('../../assets/chuwu/card2/bg.png')"
            />
          </div>
          <div class="box1-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo1.png')"
            />
          </div>
          <div class="box1-logo2">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo2.png')"
            />
          </div>
          <div class="box1-logo3">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo3.png')"
            />
          </div>
          <div class="box1-logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo4.png')"
            />
          </div>
          <div class="box1-logo5">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo5.png')"
            />
          </div>
          <div class="box1-logo6">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo6.png')"
            />
          </div>
          <div class="box1-logo7">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo7.png')"
            />
          </div>
          <div class="box1-logo8">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo8.png')"
            />
          </div>
          <div class="box1-logo9">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box1-logo9.png')"
            />
          </div>
          <div class="content">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/content.png')"
            />
          </div>
       
          <div class="content-word">2021·大年初五迎财神</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box2">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/card3/bg.png')"
            />
          </div>
          <div class="box2-content">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box2-content.png')"
            />
          </div>
          <div class="box2-logo1">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box2-logo1.png')"
            />
          </div>
           <div class="box2-logo2">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box2-logo2.png')"
            />
            <div class="logo2-word">
              <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/logo2-word.png')"
            />
            </div>
          </div>
           <div class="box2-logo3">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box2-logo3.png')"
            />
          </div>
           <div class="box2-logo4">
            <van-image
              fit="fill"
              :src="require('../../assets/chuwu/card2/box2-logo4.png')"
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
.box1,.box2 {
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
    width: 49px;
    height: 60px;
    left:29px;
    top: 74px;
  }
  .box1-logo2 {
    position: absolute;
    width: 107px;
    height: 28px;
    left: 50%;
    top: 120px;
    transform: translate(-50%);
  }
  .box1-logo3 {
    position: absolute;
    width: 35px;
    height: 8px;
    right: 29px;
    top: 74px;
  }
  .box1-logo4 {
    position: absolute;
    width: 23px;
    height: 15px;
    right: 29px;
    top: 89px;
  }
  .box1-logo5 {
    position: absolute;
    width: 12px;
    height: 70px;
    left: 50%;
    top: 195px;

        transform: translate(-50%);

  }
  .box1-logo6 {
    position: absolute;
    width: 83px;
    height: 58px;
  left: 194px;
    top: 385px;
    z-index: 2;

  }
  .box1-logo7 {
    position: absolute;
    width: 241px;
    height: 183px;
    left: 104px;
    top: 260px;
    z-index: 1;

  }
    .box1-logo8 {
    position: absolute;
    width: 115px;
    height: 11px;
    left: 136px;
    top: 453px;
    z-index: 1;

  }
    .box1-logo9{
    position: absolute;
    width: 104px;
    height: 20px;
    left: 142px;
    top: 511px;
    z-index: 1;
  }
  .content {
    position: absolute;
    width: 303px;
    height: 303px;
        left: 50%;
    top: 181px;

        transform: translate(-50%);
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
    top: 551px;
    text-align: center;

height: 30px;
font-size: 21px;
font-family: PingFang SC;
font-weight: bold;
line-height: 20px;
color: #FFFBD7;
opacity: 1;
  }
}
.box2-logo1{
    position: absolute;
    width: 142px;
    height: 32px;
    left: 117px;
    top:73px;
}
.box2-content{
    position: absolute;
    width: 289px;
    height: 433px;
    left: 43px;
    top:147px;
}
.box2-logo2{
    position: absolute;
    width: 132px;
    height: 37px;
    left: 121px;
    top:163px;
    .logo2-word{
      position: absolute;
      width: 96px;
      height: 22px;
      left: 18px;
      top:5px;
    }
}
.box2-logo3{
    position: absolute;
    width: 17px;
    height: 72px;
    right: 21px;
    top:147px;
}
.box2-logo4{
    position: absolute;
    width: 17px;
    height: 72px;
    left: 21px;
    top:509px;
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
  top: 222px;
  left: 50%;
  transform: translate(-50%);
  width: 211px;
}
.button-box {
  position: absolute;
  width: 154px;
  height: 40px;
  left: 50%;
  top: 498px;
  transform: translate(-50%);
  background-image: url("../../assets/chuwu/card2/button-box.png");
  background-repeat: round;
}
</style>