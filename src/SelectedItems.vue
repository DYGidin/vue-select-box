<template>
  <div class="selected-items">
    <ul>
      <li
        :style="{ 'z-index': items.length - i }"
        :key="i"
        v-for="(item, i) in items.slice(0, maxItemsShow)"
      >
        <img :src="item.iconUri" :alt="item.value" />
      </li>
    </ul>
    <span v-show="maxItemsShow < items.length">+{{ items.length - maxItemsShow }}</span>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    maxItemsShow: {
      type: Number,
      default: 4,
    },
  },
};
</script>
<style lang="scss" scoped>
.selected-items {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  left: 10px;
  right: 10px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5px;
  align-items: center;
  justify-content: start;
  ul {
    padding: 0;
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;
    align-items: center;
  }
  li + li {
    margin-left: -15px;
  }
  li {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
