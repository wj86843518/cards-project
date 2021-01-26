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
              :src="require('../../assets/yearGreeting/cardOne/BG.gif')"
            />
          </div>
          <div class="bg-word">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardOne/bgWord.gif')"
            />
          </div>
          <div class="year-img">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardOne/2021.gif')"
            />
          </div>
          <div class="new-year-logo">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardOne/happy.gif')"
            />
          </div>
          <div class="animal-logo">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardOne/animal.gif')"
            />
          </div>
          <div class="introduce-word">新/春/大/拜/年/初/二/我/又/来</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box2">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/cardOne/BG.gif')"
            />
          </div>
          <div class="content-box">
            <div class="content-title-logo">
              <van-image
                fit="fill"
                :src="require('../../assets/yearGreeting/cardOne/happy.gif')"
              />
            </div>
            <div class="content-title">· 新 年 祝 福 ·</div>
            <div class="content-title-second">
              <van-image
                fit="fill"
                :src="require('../../assets/yearGreeting/cardOne/greeting.png')"
              />
            </div>
            <div class="content-title-line">
              <van-image
                fit="fill"
                :src="require('../../assets/yearGreeting/cardOne/line.png')"
              />
            </div>
            <div class="content-word">
              <van-field
                v-model="contentWord"
                :border="false"
                center
                input-align="center"
              />
            </div>
            <div class="content-animal-logo">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/cardOne/animalLogo.png')
                "
              />
            </div>
            <div class="content-animal-word">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/cardOne/animalWord.png')
                "
              />
            </div>
            <div class="content-time">2021年2月11日</div>
            <div class="content-button"></div>
          </div>
          <div class="middle-title-logo">
            <van-image
              fit="fill"
              width="100%"
              :src="require('../../assets/yearGreeting/cardOne/middleLogo.png')"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <!-- 这里开始是第二页 -->
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
      },
      contentWord: "你好好你好",
    };
  },
  mounted() {
    this.shareList();
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
.bg-word {
  position: absolute;
  left: 43px;
  top: 56px;
  width: 264px;
  height: 435px;
}
.year-img {
  position: absolute;
  left: 274px;
  top: 77px;
  width: 80px;
  height: 37px;
}
.new-year-logo {
  position: absolute;
  left: 277px;
  top: 118px;
  width: 73px;
  height: 46px;
}
.animal-logo {
  position: absolute;
  left: 119px;
  top: 451px;
  width: 141px;
  height: 114px;
}
.introduce-word {
  position: absolute;
  left: 0;
  top: 565px;
  width: 100%;
  height: 26px;
  line-height: 26px;
  background-image: url("../../assets/yearGreeting/cardOne/wordBg.png");
  font-size: 18px; 
  font-family: Source Han Sans SC;
  font-weight: bold;
  /* line-height: 1.43rem; */
  color: #ead4b4;
  /* letter-spacing: 40px; */
  opacity: 1;
  text-align: center;
}
.content-box {
  width: 284px;
  height: 519px;
  position: absolute;
  left: 50%;
  top: 73px;
  transform: translate(-50%);
  border: 1px solid #ead4b4;
  opacity: 1;
}
.content-title-logo {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translate(-50%);
  width: 166px;
  height: 30px;
}
.content-title {
  width: 172px;
  height: 32px;
  background-image: url("../../assets/yearGreeting/cardOne/contentTitle.gif");
  line-height: 32px;
  position: absolute;
  left: 50%;
  top: 38px;
  transform: translate(-50%);
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #bd0f0d;
  text-align: center;
  border-radius: 15px;
}
.content-title-second {
  position: absolute;
  left: 50%;
  top: 112px;
  transform: translate(-50%);
  width: 200px;
  height:26px;
  // font-size: 1.78rem;
  // font-family: STXingkai;
  // font-weight: 400;
  // line-height: 1.87rem;
  // color: #ead4b4;
}
.middle-title-logo {
  width: 100%;
  height: 18px;
  position: absolute;
  left: 0;
  top: 147px;
}
.content-word {
  width: 100%;
  position: absolute;
  left: 0;
  top: 169px;
}
.content-word ::v-deep .van-cell {
  background-color: transparent;
  padding: 0;
}
.content-title-line {
  width: 207px;
  height: 3px;
  position: absolute;
  left: 50%;
  top: 145px;
  transform: translate(-50%);
}
.content-word ::v-deep .van-field__control {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ead4b4;
}
.content-animal-logo {
  width: 125px;
  height: 165px;
  position: absolute;
  left: 1.22px;
  top: 215px;
}
.content-animal-word {
  width: 71px;
  height:25px ;
  position: absolute;
  left: 165px;
  top: 284px;
}
.content-time {
  width: 100%;
  position: absolute;
  top:415px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #ead4b4;
}
.content-button {
  position: absolute;
  left: 50%;
  top: 465px;
  transform: translate(-50%);
  height: 40px;
  width: 154px;
  background-image: url("../../assets/yearGreeting/cardOne/buttonImg.png");
  background-repeat: round;
  line-height: 40px;
}
</style>