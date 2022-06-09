<template>
  <n-config-provider
  :locale="enUS"
  :date-locale="dateEnUS"
  :theme-overrides="themeOverrides">
    <n-space :vertical="true">
      <n-layout>
        <app-header/>

        <app-body/>

        <app-footer/>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NConfigProvider, enUS, dateEnUS, NSpace, NLayout } from 'naive-ui';
  import themeOverrides from '@/theme';
  import AppHeader from '@/components/app-header/index.vue';
  import AppBody from '@/components/app-body/index.vue';
  import AppFooter from '@/components/app-footer/index.vue';

  export default defineComponent({
    name: 'app',
    components: {
      NConfigProvider,
      NSpace,
      NLayout,
      AppHeader,
      AppBody,
      AppFooter,
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
