<template>
  <div>
    <component v-bind:is="curComponent"></component>
  </div>
</template>

<script>
import Card1 from "./cardOne.vue";
import Card2 from "./cardTwo.vue";
import Card3 from "./card3.vue";
import Card4 from "./card4.vue";
import Card5 from "./card5.vue";
import Card8 from "./card8.vue";
import Card9 from "./card9.vue";
import Card10 from "./card10.vue";
export default {
  data() {
    return {
      curComponent: "",
    };
  },
  components: {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card8,
    Card9,
    Card10,
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
