<template>
  <div class="container">
    <div class="box">
      <div class="bg-box">
        <van-image
          width="100vw"
          height="100vh"
          fit="fill"
          :src="require('../../assets/huanhua/card6/bg.png')"
        />
      </div>
      <div class="logo1">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card6/logo1.png')"
        />
      </div>
      <div class="logo2">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card6/logo2.png')"
        />
      </div>

      <div class="logo3">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card6/logo3.png')"
        />
      </div>
      <div class="logo4">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card6/logo4.png')"
        />
      </div>
      <div class="logo44">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card6/logo4.png')"
        />
      </div>
      <div class="logo5">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card6/logo5.png')"
        />
      </div>
      <div class="logo6">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card6/logo6.png')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
      },
      contentWord: "?????",
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
.content-box {
  width: 100vw;
}
.logo1 ,.logo7{
  position: absolute;
  width: 100%;
  height: 509px;
  left: 0;
  top: 0;
}
.logo7{
    z-index: 1;
}
.logo2 {
  position: absolute;
  width: 100%;
  height: 417px;
 left: 0;
  bottom: 0;
}
.logo3 {
  position: absolute;
  width: 22px;
  height: 44px;
  left: 92px;
  bottom: 187px;
  z-index: 3;

}
.logo4 {
  position: absolute;
  width: 103px;
  height: 83px;
  left:63px;
  bottom: 11px;
  z-index: 2;

}
.logo44 {
  position: absolute;
  width: 98px;
  height: 79px;
  right:16px;
  bottom: 110px;
  z-index: 2;

}
.logo5 {
  position: absolute;
  width: 39px;
  height: 39px;
 right: 62px;
  bottom: 220px;
  z-index: 2;
}
.logo6 {
  position: absolute;
  width: 197px;
  height: 172px;
  right: 0;
  top:177;
  z-index: 1;
}
.word{
    position: absolute;
    right: 92px;
    top: 175px;
    width: 26px;
font-size: 24px;
font-family: STZhongsong;
line-height: 33px;
color: #FEFEFE;
}
</style>