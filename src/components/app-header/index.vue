<template>
  <n-layout-header class="app-header">
    <n-space align="center" justify="space-between">
      <router-link to="/list">
        <n-h1 class="app-title">
          <n-text>
            TODO list
          </n-text>
        </n-h1>
      </router-link>

      <n-space justify="end">
        <n-button>locale</n-button>
        <n-button>theme</n-button>
        <n-button>auth</n-button>
      </n-space>
    </n-space>
  </n-layout-header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NButton, NH1, NLayoutHeader, NSpace, NText } from 'naive-ui';

  export default defineComponent({
    name: 'app-header',
    components: {
      NLayoutHeader,
      NSpace,
      NH1,
      NText,
      NButton,
    },

    setup() {
      return {};
    },
  });
</script>

<style lang="scss">
  @use "src/styles/variables" as *;

  .app-header {
    padding: $spacing * 2;
    border-bottom: 1px solid #000;
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%);
  }

  .app-title {
    margin-bottom: 0;
  }
</style>
