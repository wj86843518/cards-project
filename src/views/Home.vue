<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>

    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
import { getData } from "../http/home";
export default {
  name: "Home",
  components: {},
  mounted() {
    this.getData();
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    getData() {
      getData({ a: "1" }).then((res) => {
        console.log("res=>", res);
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-attachment: fixed;
  -webkit-background-attachment: fixed;
}
</style>
