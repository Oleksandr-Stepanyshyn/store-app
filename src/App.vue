<template>
  <div class="" :id="$style.app">
    <h2>{{text}}</h2>
    <custom-select :items="['name', 'label', 'salary']"/>
    <custom-input v-model="text"/>
    <apartments-list :items="apartments">
      <template v-slot:title>New title</template>
      <template v-slot:apartment="{apartment}">
        <apartments-item
          :key="apartment.id"
          :description="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          @click="handleItemClick"
        />
      </template>
    </apartments-list>
  </div>
</template>

<script>
import ApartmentsList from '@/components/apartment/ApartmentsList.vue';
import ApartmentsItem from '@/components/apartment/ApartmentsItem.vue';
import CustomInput from '@/components/shared/CustomInput.vue';
import CustomSelect from '@/components/shared/CustomSelect.vue';
import apartments from '@/components/apartment/apartments';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
    CustomSelect
  },
  data() {
    return {
      text: '',
      apartments,
    }
  },
  methods: {
    handleItemClick() {
      console.log('handleItemClick');
    }
  }
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
