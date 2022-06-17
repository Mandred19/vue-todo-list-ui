<template>
  <n-config-provider
  :locale="enUS"
  :date-locale="dateEnUS"
  :theme-overrides="themeOverrides"
  class="provider">
    <section class="app-wrapper">
      <app-header/>

      <app-body/>

      <app-footer/>
    </section>
  </n-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NConfigProvider, enUS, dateEnUS } from 'naive-ui';
  import themeOverrides from '@/theme';
  import AppHeader from '@/components/app-header/index.vue';
  import AppBody from '@/components/app-body/index.vue';
  import AppFooter from '@/components/app-footer/index.vue';

  export default defineComponent({
    name: 'app',
    components: {
      NConfigProvider,
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
  @use "src/styles/mixins" as *;

  .provider {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .app-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-flow: column nowrap;
    @include flex-layout(center, flex-start);
  }
</style>
