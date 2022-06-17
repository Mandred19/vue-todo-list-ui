<template>
  <n-layout-footer class="app-footer">
    <div>app footer</div>
  </n-layout-footer>
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
  @use "src/styles/variables" as *;
  @use "src/styles/mixins" as *;

  .app-footer {
    width: 100%;
    overflow: hidden;
    padding: $spacing * 2;
    background-color: transparent;
    @include flex-layout(center, flex-start);
    @include between-children {
      margin-right: $spacing * 2;
    }
  }
</style>
