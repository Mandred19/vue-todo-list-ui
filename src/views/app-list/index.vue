<template>
  <n-space :vertical="true" size="large">
    <app-list-header/>

    <app-list-footer/>
  </n-space>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NSpace } from 'naive-ui';
  import AppListHeader from '@/views/app-list/app-list-header.vue';
  import AppListFooter from '@/views/app-list/app-list-footer.vue';

  export default defineComponent({
    name: 'app-list',
    components: {
      NSpace,
      AppListHeader,
      AppListFooter,
    },

    setup() {
      return {

      };
    },
  });
</script>

<style lang="scss">

</style>
