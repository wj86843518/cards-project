<template>
  <div>
    <component v-bind:is="curComponent"></component>
  </div>
</template>

<script>
import Card5 from "./card5.vue";
import Card6 from "./card6.vue";
import Card7 from "./card7.vue";
export default {
  data() {
    return {
      curComponent: "",
    };
  },
  components: {
    Card5,
    Card6,
    Card7
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
