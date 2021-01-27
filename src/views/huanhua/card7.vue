<template>
  <div class="container">
    <div class="box">
      <div class="bg-box">
        <van-image
          width="100vw"
          height="100vh"
          fit="fill"
          :src="require('../../assets/huanhua/card7/bg.png')"
        />
      </div>
      <div class="logo1">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo1.png')"
        />
      </div>
      <div class="logo2">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo2.png')"
        />
      </div>

      <div class="logo3">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo3.png')"
        />
      </div>
      <div class="logo4">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo4.png')"
        />
      </div>
     
      <div class="logo5">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo5.png')"
        />
      </div>
      <div class="logo6">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo6.png')"
        />
      </div>
      <div class="logo7">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo7.png')"
        />
      </div>
      <div class="logo8">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo8.png')"
        />
      </div>
      <div class="logo9">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo9.png')"
        />
      </div>
        <div class="logo10">
        <van-image
          fit="fill"
          :src="require('../../assets/huanhua/card7/logo10.png')"
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
.logo1{
  position: absolute;
  width: 263px;
  height: 139px;
  left: 0;
  top: 70px;
  z-index: 3;
}
.logo2 {
  position: absolute;
  width: 89px;
  height: 708px;
 left: 0;
  top: 0;
  z-index: 1;
}
.logo3 {
  position: absolute;
  width: 160px;
  height: 259px;
  left: 108px;
  top:143px;
  z-index: 2;

}
.logo4 {
  position: absolute;
  width: 259px;
  height: 272px;
  right: 0;
  top:0;
  z-index: 2;

}

.logo5 {
  position: absolute;
  width:80px;
  height: 42px;
 left: 11px;
  top: 646px;
  z-index: 2;
}
.logo6 {
  position: absolute;
  width: 181px;
  height: 156px;
  left: 0;
  top:656px;
  z-index: 4;
}
.logo7 {
  position: absolute;
  width: 176px;
  height: 358px;
  right: 0;
  top:454px;
  z-index: 4;
}
.logo8{
     position: absolute;
  width: 248px;
  height: 361px;
  left: 120px;
  top:415px;
  z-index: 2;
}
.logo9{
     position: absolute;
  width: 229px;
  height: 172px;
  right: 0;
  top:530px;
  z-index: 1;
}
.logo10{
    position: absolute;
    width: 100%;
    height: 139px;
    left: 0;
    top: 674px;
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