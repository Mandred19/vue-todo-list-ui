<template>
  <section class="list-header">
    <n-button type="info" size="large">
      <template #icon>
        <n-icon>
          <add-icon/>
        </n-icon>
      </template>
      Create todo
    </n-button>

    <app-search/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NIcon, NButton } from 'naive-ui';
  import AppSearch from '@/components/app-search/index.vue';
  import { AddFilled as addIcon } from '@vicons/material';

  export default defineComponent({
    name: 'app-app-list-header',
    components: {
      AppSearch,
      NButton,
      NIcon,
      addIcon,
    },

    setup() {
      return {};
    },
  });
</script>

<style lang="scss">
  @use "src/styles/variables" as *;
  @use "src/styles/mixins" as *;

  .list-header {
    width: 100%;
    padding: $spacing $spacing * 2;
    @include flex-layout(center, flex-start);
    @include between-children {
      margin-right: $spacing * 2;
    }
  }
</style>
