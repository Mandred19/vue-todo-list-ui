<template>
  <n-space :vertical="true">

  </n-space>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NSpace } from 'naive-ui';

  export default defineComponent({
    name: 'app-list',
    components: {
      NSpace,
    },

    setup() {
      return {

      };
    },
  });
</script>

<style lang="scss">
  @use "src/styles/variables" as *;
</style>
