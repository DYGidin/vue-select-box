<script>
import { defineComponent } from 'vue';
import VueSelectBox from '@/vue-select-box.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueSelectBox
  }
});
</script>

<template>
  <div id="app">
    <vue-select-box />
  </div>
</template>
