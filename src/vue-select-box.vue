<template>
  <div
    class="select-box-wrapper"
    :class="{ 'image-item': $slots['selected'], 'small-font': smallFont }"
  >
    <vue-select
      v-bind="$props"
      v-model="value"
      :options="list"
     
      @update:modelValue="(value) => select(value)"
    >
    </vue-select>
  </div>
</template>

<script>
import { reactive, toRefs, watch, ref, nextTick, onMounted, h, computed } from "vue";
import VueSelect from "vue-next-select";

export default {
  name: "SelectBox",
  components: { VueSelect },
  emits: ["change", "update:modelValue"],
  props: {
    ...VueSelect.props,
    options: [Array],
    modelValue: [String, Object, Number],
    smallFont: {
      type: Boolean,
      default: false,
    },
    selectedText: {
      type: String,
      default: "Selected",
    },
    selectedItems: {
      type: Array,
      default: [],
    },
  },
  setup(props, { emit, slots }) {
   
    return {

    };
  },
};
</script>
<style lang="scss" scoped>

</style>
