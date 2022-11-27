<template>
  <header class="header">
    <BaseContainer>
      <LogoApp />
    </BaseContainer>
  </header>
</template>

<script>
import BaseContainer from "@/components/shared/BaseContainer.vue";
import LogoApp from "@/components/LogoApp.vue";

export default {
  name: "HeaderApp",
  components: {
    BaseContainer,
    LogoApp,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
}
</style>
