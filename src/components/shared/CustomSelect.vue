<template>
  <select @input="select($event.target.value)" class="custom-select">
    <option 
      v-for="item in formattedItems" 
      :value="item.value" 
      :key="item.value"
      :selected="item.selected"
    >{{item.label}}</option>
  </select>
</template>

<script>
  export default {
    name: 'CustomSelect',
    props:{
      // city: {
      //   type: String,
      //   required: true
      // },
      items: {
        type: Array,
        required: true,
      }
    },
    emits: ['update:modelValue'],
    computed:{
      formattedItems() {
        return this.items.map(item => {
          return typeof item === "object" ? item : { value: item, label: item };
        })
      }
    },
    methods:{
      select(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>