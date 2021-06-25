<template>
  <div
    class="select-box-wrapper"
    :class="{ 'image-item': $slots['selected'], 'small-font': smallFont }"
  >
    <vue-select
      v-bind="$props"
      v-model="value"
      :options="list"
      ref="selectBox"
      @update:modelValue="(value) => select(value)"
    >
      <template #dropdown-item="{ option }">
        <slot :option="option" />
      </template>
    </vue-select>
  </div>
</template>

<script>
import { reactive, toRefs, watch, ref, nextTick, onMounted, h, computed } from "vue";
import VueSelect from "vue-next-select";
import { defineComponent, createApp } from "vue";

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
    const state = reactive({
        value: props.modelValue,
        list: JSON.parse(JSON.stringify(props.options)),
        isFocusing: false,
      }),
      selectBox = ref();

    const select = (option) => {
      emit("update:modelValue", option);
      emit("change", option);
      if (Array.isArray(option) && !slots["selected-items"]) {
        const inputEl = selectBox.value.wrapper.querySelector(".vue-input input");
        nextTick(() => (inputEl.placeholder = props.selectedText + " " + option.length));
      }
    };

    watch(
      () => props.modelValue,
      (current) => {
        state.value = current;
      }
    );

    watch(
      () => props.options,
      (current) => {
        state.list = current;
      }
    );

    watch(
      () => selectBox?.value?.isFocusing,
      (current) => {
        state.isFocusing = current;
        if (slots["selected-items"]) {                
          state.value = props.selectedItems.map((u) => u.value);             
        }
      }
    );

    watch(
      () => props.selectedItems,
      (current) => {
        const inputEl = selectBox.value.wrapper.querySelector(".vue-input input");
        inputEl.placeholder = props.placeholder;
      }
    );

    const injectApplyButton = () => {
      const buttonApply = defineComponent({
          render() {
            return h(
              "div",
              { onClick: () => selectBox.value.blur() },
              slots["apply-button"]()
            );
          },
        }),
        list = selectBox.value.wrapper.querySelector(".vue-dropdown"),
        li = document.createElement("li");
      li.classList.add("apply-item");
      list.appendChild(li);
      const app = createApp(buttonApply);
      app.mount(li);
    };

    const injectSelectedItems = () => {
      const header = selectBox.value.wrapper.querySelector(".vue-input");

      const itemComponent = defineComponent({
        render() {
          return h(
            "div",
            {
              class: computed(() =>
                !state.isFocusing
                  ? "selected-items-slot selected-items-slot-show"
                  : "selected-items-slot"
              ).value,
            },
            slots["selected-items"]()
          );
        },
      });

      const container = document.createElement("div");
      header.appendChild(container);
      const app = createApp(itemComponent);
      app.mount(container);
    };

    const injectSelectedItem = () => {
      const header = selectBox.value.wrapper.querySelector(".vue-input");

      const itemComponent = defineComponent({
        render() {
          return h(
            "div",
            {
              class: computed(() =>
                !state.isFocusing ? "selected-item selected-item-show" : "selected-item"
              ).value,
            },
            slots["selected-item"]()
          );
        },
      });

      const container = document.createElement("div");
      header.appendChild(container);
      const app = createApp(itemComponent);
      app.mount(container);
    };

    const injectIcon = () => {
      const icon = defineComponent({
          render() {
            return h(
              "div",
              { class: "dropdown-icon-slot" },
              h("div", { class: "icon-wrapper" }, slots["icon"]())
            );
          },
        }),
        container = selectBox.value.wrapper.querySelector(
          ".vue-select-header .arrow-downward"
        );
      const app = createApp(icon);
      app.mount(container);
    };

    onMounted(() => {
      if (slots["selected-items"]) {
        injectSelectedItems();
      }
      if (slots["apply-button"]) {
        injectApplyButton();
      }
      if (slots["selected-item"]) {
        injectSelectedItem();
      }
      if (slots["icon"]) {
        injectIcon();
      }
    });

    return {
      ...toRefs(state),
      select,
      selectBox,
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
