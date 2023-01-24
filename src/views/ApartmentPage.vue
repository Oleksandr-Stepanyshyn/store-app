<template>
  <main class="apartment-page">
    <BaseContainer>
      <div class="apartment-page__content">
        <ApartmentInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
        </div>
      </div>
    </BaseContainer>
  </main>
</template>

<script>
import BaseContainer from "@/components/shared/BaseContainer.vue";
import ApartmentInfo from "@/components/apartment/ApartmentInfo.vue";
import ApartmentOwner from "@/components/apartment/ApartmentOwner.vue";

import apartments from "@/components/apartment/apartments";

export default {
  name: "ApartmentPage",
  components: {
    BaseContainer,
    ApartmentInfo,
    ApartmentOwner,
  },
  computed: {
    apartment() {
      return apartments.find(({ id }) => id === this.$route.params.id);
    },
  },
  mounted() {
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
