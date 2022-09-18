<template>
  <base-container>
    <div class="apartments-list">
      <apartments-item
        v-for="{id, descr, rating, imgUrl, price} in items"
        :key="id"
        :description="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </base-container>
</template>

<script>
  import ApartmentsItem from './ApartmentsItem.vue';
  import BaseContainer from '../shared/BaseContainer.vue';
  export default {
    name: 'apartments-list',
    components:{
      ApartmentsItem,
      BaseContainer
    },
    props:{
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>