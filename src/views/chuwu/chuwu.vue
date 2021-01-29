<template>
  <div>
    <component v-bind:is="curComponent"></component>
  </div>
</template>

<script>
import Card1 from "./card1.vue";
import Card2 from "./card2.vue";
import Card3 from "./card3.vue";
export default {
  data() {
    return {
      curComponent: "",
    };
  },
  components: {
    Card1,
    Card2,
    Card3
  },
  watch: {
    $route: {
      handler: function () {
        this.curComponent = `Card${this.$route.params.id}`;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
