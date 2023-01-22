<template>
  <main class="homepage">
    <BaseContainer>
      <ApartmentFilterForm class="apartments-filter" @submitForm="filter" />
      <router-view></router-view>
    </BaseContainer>
    <BaseContainer>
      <p v-if="!filteredApartments.length">Нічого не знайдено</p>
      <ApartmentsList v-else :items="filteredApartments">
        <!-- <template v-slot:title>New title</template> -->
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :description="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
            @click="handleItemClick"
          />
        </template>
      </ApartmentsList>
    </BaseContainer>
  </main>
</template>

<script>
import ApartmentsList from "@/components/apartment/ApartmentsList.vue";
import ApartmentsItem from "@/components/apartment/ApartmentsItem.vue";
import ApartmentFilterForm from "@/components/apartment/ApartmentFilterForm.vue";
import BaseContainer from "@/components/shared/BaseContainer.vue";

import apartments from "@/components/apartment/apartments";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    BaseContainer,
  },
  data() {
    return {
      text: "",
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    handleItemClick() {
      console.log("handleItemClick");
    },
    filter({ city, price }) {
      console.log("submit app");
      console.log(city, price);
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
