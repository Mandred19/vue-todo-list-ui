<template>
  <n-layout-footer class="app-footer"></n-layout-footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NLayoutFooter } from 'naive-ui';

  export default defineComponent({
    name: 'app-footer',
    components: {
      NLayoutFooter,
    },

    setup() {
      return {};
    },
  });
</script>

<style lang="scss">
  .app-footer {
    width: 100%;
    overflow: hidden;
  }
</style>
