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

    nextTick(() => {
      watch(
        () => selectBox.value.isFocusing,
        (current) => {
          state.isFocusing = current;
          if (slots["selected-items"]) {
            state.value = props.selectedItems.map((u) => u.value);
          }
        }
      );
    });

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
::v-deep() {
  .apply-item {
    padding: 5px;
    position: sticky;
    bottom: 0px;
    left: 0;
    width: 100%;
    background: white;
    z-index: 1;
  }

  .selected-item {
    position: absolute;
    top: 3px;
    left: 5px;
    right: 5px;
    background: white;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    justify-content: flex-start;
    align-items: center;
    padding-right: 50px;
  }
  .selected-items-slot {
    display: none;
    &-show {
      display: block;
    }
  }
  .dropdown-icon-slot {
    position: absolute;
    top: 0;
    left: -1px;
    right: 5px;
    height: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid white;
    background: white;
  }
  * {
    box-sizing: border-box;
    outline: none;
  }
  .image-item {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #363636;

    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
      border-radius: 50%;
    }
  }

  .vue-select {
    position: relative;
    .vue-select-header {
      height: 55px;
      display: flex;

      align-items: center;
      justify-content: space-between;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      border: 1px solid #c3cad9;
      box-sizing: border-box;
      border-radius: 8px;
      text-align: center;
      color: #363636;
      cursor: pointer;
      @media (max-width: 1200px) {
        height: 45px;
      }
    }
    .icon {
      border-left: 1px solid #c3cad9;
      width: 54px;
      height: 100%;
      display: block;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-shrink: 0;
      &:before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACCSURBVHgBjdA7DoAgDAZgHgmzM5NH6MJBPClHMM4McgQn4ujOgPyJJsYUQpeW0i80CFGDiCYxGHV2RlYojDG7c44GENXZFQ+pGONRSlmklL6HH+QxW82l0UwpndbaDRgZ5xYKIUT09HvZwhxCyP9KWBcYgzlnwSEWfjFqDnUDuPdZN5KiUuIFuIyJAAAAAElFTkSuQmCC);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        transition: 0.5s;
      }
      &.active {
        &:before {
          transform: translate(-50%, -50%) rotate(-180deg);
        }
      }
    }
    .vue-input {
      width: 100%;
      input {
        color: #363636;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        height: 100%;
        outline: 0;
        border: 0;
        padding-left: 25px;
        width: 100%;
        &::placeholder {
          color: #363636;
        }
      }
    }
  }

  .vue-dropdown {
    width: 100%;
    position: absolute;
    z-index: 999999;
    list-style: none;
    padding: 0;
    margin: 0;
    background: white;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    margin-top: 17px;
    max-height: 300px;
    overflow: auto;
    .vue-dropdown-item {
      cursor: pointer;
      height: 55px;
      display: flex;
      align-items: center;
      padding-left: 25px;
      padding-right: 25px;
      &.selected,
      &:hover {
        background: #f9fcff;
      }
    }
    &[data-multiple="true"] {
      .vue-dropdown-item {
        position: relative;
        padding-left: 40px;
        &::after {
          content: "";
          display: block;
          width: 16px;
          height: 16px;
          border: 2px solid #363636;
          box-sizing: border-box;
          border-radius: 4px;
          position: absolute;
          left: 17px;
          top: 50%;
          transform: translateY(-50%);
        }
        &.selected {
          &::before {
            content: "";
            position: absolute;
            z-index: 1;
            left: 22px;
            top: 50%;
            margin-top: -2px;
            transform: translateY(-50%) rotate(45deg);
            height: 9px;
            width: 4px;
            border-bottom: 2px solid white;
            border-right: 2px solid white;
          }
          &::after {
            border: 0;
            background: #0f8af9;
          }
        }
      }
    }
  }
}
.image-item ::v-deep(.vue-select .vue-input input) {
  padding-left: 60px;
}
.small-font {
  ::v-deep(.image-item) {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
