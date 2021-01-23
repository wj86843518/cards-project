<template>
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

    </div>
  </div>
</template>

<script>
export default {
  mounted(){
   
  }
}
</script>

<style>
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
</style>