<template>
  <n-config-provider
  :locale="enUS"
  :dateLocale="dateEnUS"
  :themeOverrides="themeOverrides">
    <n-space :vertical="true">
      <n-layout>
        <app-header/>

        <app-content/>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NConfigProvider, enUS, dateEnUS, NSpace, NLayout } from 'naive-ui';
  import themeOverrides from '@/theme';
  import AppHeader from '@/components/app-header/index.vue';
  import AppContent from '@/components/app-content/index.vue';

  export default defineComponent({
    name: 'app',
    components: {
      NConfigProvider,
      NSpace,
      NLayout,
      AppHeader,
      AppContent,
    },

    setup() {
      return {
        enUS,
        dateEnUS,
        themeOverrides,
      };
    },
  });
</script>

<style lang="scss">

</style>
