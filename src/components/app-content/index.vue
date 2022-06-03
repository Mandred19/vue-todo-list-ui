<template>
  <n-layout-content class="app-content">
    <router-view/>
  </n-layout-content>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NLayoutContent } from 'naive-ui';

  export default defineComponent({
    name: 'app-content',
    components: {
      NLayoutContent,
    },

    setup() {
      return {};
    },
  });
</script>

<style lang="scss">
  .app-content {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
