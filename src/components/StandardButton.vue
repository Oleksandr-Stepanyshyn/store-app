<template>
  <button :type="type" :class="{'btn': true, 'btn--outlined':outlined}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "StandardButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn{
    display: inline-block;
    font-size: 18px;
    background-color: #FF662D;
    color: #ffffff;
    cursor: pointer;
    min-width: 220px;
    border: 1px solid transparent;
    padding: 8px 15px;

    &--outlined{
      background-color: transparent;
      border: 1px solid #FF662D;
      color:#FF662D;
    }
  }
</style>