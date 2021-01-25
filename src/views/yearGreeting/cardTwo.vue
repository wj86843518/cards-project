<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="box">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/cardTwo/BG.png')"
            />
          </div>
          <div class="content-box">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardTwo/bgBox.png')"
            />
          </div>
          <div class="time">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardTwo/2021.png')"
            />
          </div>
          <div class="greeting">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardTwo/greeting.png')"
            />
          </div>
        </div>
        <div class="content-word">
          <van-field
            v-model="contentWord"
            :border="false"
            center
            input-align="center"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box2">
          <div class="bg-box">
            <van-image
              width="100vw"
              height="100vh"
              fit="fill"
              :src="require('../../assets/yearGreeting/cardTwo/BG.png')"
            />
          </div>
          <div class="contentBg">
            <van-image
              fit="fill"
              height="100vh"
              :src="require('../../assets/yearGreeting/cardTwo/contentBg.png')"
            />
          </div>
          <div class="greeting-word">新年祝福</div>
          <div class="animal">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardTwo/animal.png')"
            />
          </div>
          <div class="content-animal-word">
            <!-- <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/cardOne/animalWord.png')
                "
              /> -->
            金牛一尊
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
          <div class="button">
            <div class="button-word">
              <van-image
                fit="fill"
                :src="
                  require('../../assets/yearGreeting/cardTwo/buttonWord.png')
                "
              />
            </div>
          </div>
          <div class="second-time">
            <van-image
              fit="fill"
              :src="require('../../assets/yearGreeting/cardTwo/2021.png')"
            />
          </div>
          <div class="button-img">
            <van-image
              fit="fill"
              height="100%"
              :src="require('../../assets/yearGreeting/cardTwo/bottom.png')"
            />
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
      contentWord: "--某某某祝您新年快乐 万事如意--",
      sendWord: "新的一年，某某某愿您万事如意 吉祥如意向着理想尽情翱翔机缘!",
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
.box,
.box2 {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.bg-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
.content-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.time {
  position: absolute;
  width: 172px;
  height: 79px;
  top: 151px;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
}
.greeting {
  position: absolute;
  width: 158px;
  height: 221px;
  top: 229px;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
}
.content-word {
  width: 100%;
  position: absolute;
  top: 552px;
  left: 0;
  z-index: 3;
}
.content-word ::v-deep .van-cell {
  background-color: transparent;
  padding: 0;
}
.send-word ::v-deep .van-cell {
  background-color: transparent;
  padding: 0;
}
.send-word ::v-deep .van-field__control {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 25px;
  color: #9a0600;
}
.content-word ::v-deep .van-field__control {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ead4b4;
}
.box2 {
  .contentBg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
  }
  .greeting-word {
    position: absolute;
    left: 0;
    top: 124px;
    width: 100%;
    height: 82px;
    background-image: url("../../assets/yearGreeting/cardTwo/greetingWord.png");
    background-repeat: round;
    text-align: center;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 82px;
    color: #e9c588;
    opacity: 1;
  }
  .animal {
    position: absolute;
    width: 97px;
    height: 128px;
    left: 94px;
    top: 207px;
  }
  .content-animal-word {
    width: 100px;
    height: 25px;
    position: absolute;
    left: 211px;
    top: 271px;

    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 25px;
    color: #9a0600;
    opacity: 1;
  }
  .button {
    width: 228px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 475px;
    transform: translate(-50%);
    background-image: url("../../assets/yearGreeting/cardTwo/button.png");
    background-repeat: round;
    display: flex;
    align-items: center;
    justify-content: center;
    .button-word {
      width: 44px;
      height: 30px;
    }
  }
  .second-time {
    width: 172px;
    height: 79px;
    position: absolute;
    left: 50%;
    bottom: 25px;
    transform: translate(-50%);
  }
}
.send-word {
  position: absolute;
  top: 358px;
  left: 50%;
  transform: translate(-50%);
  width: 228px;
  height: 76px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 25px;
  color: #9a0600;
}
.button-img {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 124px;
}
</style>