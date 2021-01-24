<template>
  <div>
    <div class="page1" v-if="showpage(1)">
      <div class="lantern-box">
        <div class="lantern-1"></div>
        <div class="lantern-2"></div>
      </div>
      <div class="center-bg"></div>
      <div class="stripe"></div>
      <div class="banner"></div>
      <div class="center-text"></div>
      <div class="blessing-input-1 editable-text">
        <van-field
          v-model="page1Input1"
          placeholder=""
          :border="false"
          bind:change="onPage1Input1Change"
        />
      </div>
      <div class="blessing-input-2 editable-text">
        <van-field
          v-model="page1Input2"
          placeholder=""
          :border="false"
          bind:change="onPage1Input2Change"
        />
      </div>
      <div class="fireworks-1"></div>
      <div class="fireworks-2"></div>
      <div class="fireworks-3"></div>
    </div>
    <div class="page2" v-if="showpage(2)">
      <div class="lantern-box">
        <div class="lantern-1"></div>
        <div class="lantern-2"></div>
      </div>
      <div class="center-bg"></div>
      <div class="stripe"></div>
      <div class="blessing"></div>
      <div class="crane"></div>
      <div class="ruyi"></div>
      <div class="ox"></div>
      <div class="ox-text"></div>
      <div class="signature-box">
        <div class="signature-input editable-text">
          <van-field
            v-model="page2Input"
            placeholder=""
            :border="false"
            bind:change="onPage2InputChange"
          />
        </div>
        <div class="date">
          <span>{{ getTodayDate() }}</span>
        </div>
      </div>
      <div class="banner"></div>
      <div class="banner-text"></div>
      <div class="fireworks-1"></div>
      <div class="fireworks-2"></div>
      <div class="fireworks-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curPage: 1,
      page1Input1: "大年三十前·我来拜早年",
      page1Input2: "xxx恭祝您新春快乐！",
      page2Input: "xxx敬祝",
    };
  },
  mounted() {},
  methods: {
    showpage(page) {
      return this.curPage === page;
    },
    onPage1Input1Change() {},
    onPage1Input2Change() {},
    onPage2InputChange() {},
    getTodayDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}年${month}月${day}日`;
    },
  },
};
</script>

<style lang="scss" scoped>
.page1,
.page2 {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/yearGreeting/card10/bg1.png") center;
  background-size: cover;
  .center-bg {
    width: 80vw;
    height: 80vh;
    background: url("../../assets/yearGreeting/card10/bg2.png");
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .lantern-box {
    display: flex;
    justify-content: space-between;
    .lantern-1 {
      width: 120px;
      height: 120px;
      background: url("../../assets/yearGreeting/card10/lantern1.png");
      background-size: cover;
      margin-left: -30px;
      margin-top: -15px;
      z-index: 10;
    }
    .lantern-2 {
      width: 120px;
      height: 120px;
      background: url("../../assets/yearGreeting/card10/lantern2.png");
      background-size: cover;
      margin-right: -10px;
      margin-top: -15px;
      z-index: 20;
    }
  }
  .fireworks-1 {
    width: 42px;
    height: 60px;
    background: url("../../assets/yearGreeting/card10/fireworks1.png");
    background-size: cover;
    position: absolute;
    top: 420px;
    right: 0;
    z-index: 9;
  }
  .fireworks-2 {
    width: 35px;
    height: 70px;
    background: url("../../assets/yearGreeting/card10/fireworks2.png");
    background-size: cover;
    position: absolute;
    top: 30px;
    z-index: 9;
  }
  .fireworks-3 {
    width: 310px;
    height: 150px;
    background: url("../../assets/yearGreeting/card10/fireworks3.png");
    background-size: cover;
    position: absolute;
    top: 430px;
    z-index: 15;
  }
}
.page1 {
  .stripe {
    width: 100vw;
    height: 50vh;
    background: url("../../assets/yearGreeting/card10/stripe.png");
    background-size: cover;
    position: relative;
    z-index: 30;
  }
  .banner {
    width: 300px;
    height: 150px;
    background: url("../../assets/yearGreeting/card10/banner.png");
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 140px;
    z-index: 40;
  }
  .center-text {
    width: 200px;
    height: 150px;
    background: url("../../assets/yearGreeting/card10/center-text.png");
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 110px;
    z-index: 50;
  }
  .blessing-input-1 {
    width: 220px;
    height: 24px;
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 380px;
    z-index: 30;
    font-family: STHupo;
    ::v-deep .van-field__control {
      text-align: center;
      font-size: 20px;
    }
  }
  .blessing-input-2 {
    width: 150px;
    height: 16px;
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 410px;
    z-index: 30;
    font-family: PingFang SC;
    ::v-deep .van-field__control {
      text-align: center;
    }
  }
}
.page2 {
  .stripe {
    width: 150vw;
    height: 70vh;
    background: url("../../assets/yearGreeting/card10/stripe.png");
    background-size: cover;
    position: absolute;
    top: -25px;
    z-index: 4;
  }
  .blessing {
    width: 200px;
    height: 65px;
    background: url("../../assets/yearGreeting/card10/blessing3.png");
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 90px;
    z-index: 50;
  }
  .crane {
    width: 200px;
    height: 75px;
    background: url("../../assets/yearGreeting/card10/crane.png");
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 180px;
    z-index: 50;
  }
  .ruyi {
    width: 200px;
    height: 90px;
    background: url("../../assets/yearGreeting/card10/ruyi.png");
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 220px;
    z-index: 50;
  }
  .ox {
    width: 60px;
    height: 80px;
    background: url("../../assets/yearGreeting/card10/ox.png");
    background-size: cover;
    position: absolute;
    top: 330px;
    left: 60px;
    z-index: 50;
  }
  .ox-text {
    width: 70px;
    height: 20px;
    background: url("../../assets/yearGreeting/card10/ox-text.png");
    background-size: cover;
    position: absolute;
    top: 360px;
    left: 125px;
    z-index: 50;
  }
  .signature-box {
    width: 100px;
    height: 50px;
    background-size: cover;
    position: absolute;
    top: 410px;
    right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 50;
    .signature-input,
    .date {
      text-align: right;
      color: #fddb8c;
    }
    ::v-deep .van-field__control {
      text-align: right;
    }
  }
  .banner {
    width: 180px;
    height: 90px;
    background: url("../../assets/yearGreeting/card10/banner.png");
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 470px;
    z-index: 50;
  }
  .banner-text {
    width: 55px;
    height: 30px;
    background: url("../../assets/yearGreeting/card10/present.png");
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 485px;
    z-index: 60;
  }
}
.editable-text {
  .van-cell {
    background-color: transparent;
    padding: 0;
  }
  ::v-deep .van-field__control {
    color: #fddb8c;
    font-size: 12px;
  }
}
</style>