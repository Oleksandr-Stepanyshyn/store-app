<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect 
      class="form__select" 
      name="city"
      v-model="city"
      :items="cities"
    />
    <CustomInput 
      name="price"
      v-model="price"
      placeholder="Ціна, від"
    />
    <SubmitButton 
      class="form__submit"
      type="submit"
    >Підбір житла</SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "@/components/shared/CustomSelect.vue";
import CustomInput from "@/components/shared/CustomInput.vue";
import SubmitButton from "@/components/StandardButton.vue"

export default {
  name: 'ApartmentFilterForm',
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton
  },
  data() {
    return {
      price: '',
      city: '',
    }
  },
  computed: {
    cities() {
      return [{ value: "", label: 'Місто', selected: true},'name', 'label', 'salary'];
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit ApartmentFilterForm')
      this.$emit('submitForm', {
        city: this.city,
        price: this.price
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>