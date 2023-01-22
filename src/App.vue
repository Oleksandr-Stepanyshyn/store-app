<template>
  <div class="" id="app">
    <HeaderApp />
    <div class="content">
      <router-view></router-view>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  padding-top: 120px;
  flex-grow: 1;
}
</style>
