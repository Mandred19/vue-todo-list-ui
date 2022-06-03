<template>
  <n-layout-content class="app-body">
    <router-view/>
  </n-layout-content>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NLayoutContent } from 'naive-ui';

  export default defineComponent({
    name: 'app-body',
    components: {
      NLayoutContent,
    },

    setup() {
      return {};
    },
  });
</script>

<style lang="scss">
  .app-body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
