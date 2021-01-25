<template>
  <div>
    <component v-bind:is="curComponent"></component>
  </div>
</template>

<script>
import Card1 from "./cardOne.vue";
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
