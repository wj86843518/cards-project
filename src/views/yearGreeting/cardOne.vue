<template>
  <div class="box">
    <div class="bg-box">
      <van-image
        width="100vw"
        height="100vh"
        fit="fill"
        :src="require('../../assets/yearGreeting/cardOne/BG.gif')"
      />
    </div>
    <!-- <div class="bg-word">
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
    <div class="introduce-word">新/春/大/拜/年/初/二/我/又/来</div> -->

    <!-- 这里开始是第二页 -->
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
          :src="require('../../assets/yearGreeting/cardOne/animalLogo.png')"
        />
      </div>
      <div class="content-animal-word">
        <van-image
          fit="fill"
          :src="require('../../assets/yearGreeting/cardOne/animalWord.png')"
        />
      </div>
      <div class="content-time">
        2021年2月11日
      </div>
      <div class="content-button">

      </div>
    </div>
    <div class="middle-title-logo">
      <van-image
        fit="fill"
        width="100%"
        height="1.27rem"
        :src="require('../../assets/yearGreeting/cardOne/middleLogo.png')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentWord: "你好好你好",
    };
  },
};
</script>

<style scoped>
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
.bg-word {
  position: absolute;
  left: 3.08rem;
  top: 3.97rem;
  width: 18.86rem;
  height: 31.11rem;
}
.year-img {
  position: absolute;
  left: 19.56rem;
  top: 5.52rem;
  width: 5.75rem;
  height: 2.67rem;
}
.new-year-logo {
  position: absolute;
  left: 19.56rem;
  top: 8.44rem;
  width: 5.24rem;
  height: 3.27rem;
}
.animal-logo {
  position: absolute;
  left: 8.51rem;
  top: 32.25rem;
  width: 10.1rem;
  height: 8.13rem;
}
.introduce-word {
  position: absolute;
  left: 0;
  top: 40.7rem;
  width: 100%;
  height: 2.51rem;
  line-height: 2.51rem;
  background-image: url("../../assets/yearGreeting/cardOne/wordBg.png");
  font-size: 1.27rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  /* line-height: 1.43rem; */
  color: #ead4b4;
  /* letter-spacing: 40px; */
  opacity: 1;
  text-align: center;
}
.content-box {
  width: 20.32rem;
  height: 37.05rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ead4b4;
  opacity: 1;
}
.content-title-logo {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  width: 11.84rem;
  height: 2.13rem;
}
.content-title {
  width: 12.32rem;
  height: 2.25rem;
  background-image: url("../../assets/yearGreeting/cardOne/contentTitle.gif");
  line-height: 2.25rem;
  position: absolute;
  left: 50%;
  top: 3.1rem;
  transform: translate(-50%);
  font-size: 1.27rem;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #bd0f0d;
  letter-spacing: 4px;
  text-align: center;
  border-radius: 6rem;
}
.content-title-second {
  position: absolute;
  left: 50%;
  top: 8.4rem;
  transform: translate(-50%);
  width: 14.25rem;
  height: 1.87rem;
  font-size: 1.78rem;
  font-family: STXingkai;
  font-weight: 400;
  line-height: 1.87rem;
  color: #ead4b4;
}
.middle-title-logo {
  width: 100%;
  height: 1.27rem;
  position: absolute;
  left: 0;
  top: 12.51rem;
}
.content-word {
  width: 100%;
  position: absolute;
  left: 0;
  top: 12.06rem;
}
.content-word /deep/ .van-cell {
  background-color: transparent;
  padding: 0;
}
.content-title-line {
  width: 14.76rem;
  height: 0.22rem;
  position: absolute;
  left: 50%;
  top: 10.35rem;
  transform: translate(-50%);
}
.content-word /deep/ .van-field__control {
  font-size: 1.27rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ead4b4;
}
.content-animal-logo {
  width: 8.95rem;
  height: 11.78rem;
  position: absolute;
  left: 1.56rem;
  top: 15.33rem;
}
.content-animal-word {
  width: 5.08rem;
  height: 1.78rem;
  position: absolute;
  left: 11.78rem;
  top: 20.32rem;
}
.content-time{
  width:100%;
  position: absolute;
  top:29.62rem;
  height: 1.43rem;
  line-height: 1.43rem;
  text-align: center;
  font-size: 1.02rem;
  color: #EAD4B4;
}
.content-button{
  position: absolute;
  left: 50%;
  top:33.21rem;
  transform: translate(-50%);
  height: 2.86rem;
  width: 10.98rem;
  background-image: url("../../assets/yearGreeting/cardOne/buttonImg.png");
  background-repeat: round;
  line-height: 2.86rem;

}
</style>