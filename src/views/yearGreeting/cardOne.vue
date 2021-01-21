<template>
<div class="box">
    <div class="bg-box">    <van-image
  width="100vw"
  height="100vh"
  fit="fill"
  :src="require('../../assets/yearGreeting/cardOne/BG.gif')"
/></div>
  <div class="bg-word">    <van-image
  width="100vw"
  height="100vh"
  fit="fill"
  :src="require('../../assets/yearGreeting/cardOne/bgWord.gif')"
/></div>
</div>

</template>

<script>
export default {};
</script>

<style scoped>
.html{
  font-size: 12px;
}
.box{
position: relative;
 width: 100vw;
  height: 100vh;
}
.bg-box{
  position: absolute;
    left: 0;
    top: 0;
  width: 100vw;
  height: 100vh;  
}
.bg-word{
    position: absolute;
    left: 0;
    top: 0;
  width: 100vw;
  height: 100vh;
}

</style>