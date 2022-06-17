<template>
  <section class="app-list">
    <app-list-header/>

    <app-list-body/>

    <app-list-footer/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AppListHeader from '@/views/app-list/app-list-header.vue';
  import AppListBody from '@/views/app-list/app-list-body.vue';
  import AppListFooter from '@/views/app-list/app-list-footer.vue';

  export default defineComponent({
    name: 'app-list',
    components: {
      AppListHeader,
      AppListBody,
      AppListFooter,
    },

    setup() {
      return {

      };
    },
  });
</script>

<style lang="scss">
  @use "src/styles/variables" as *;
  @use "src/styles/mixins" as *;

  .app-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-flow: column nowrap;
    @include flex-layout(center, flex-start);
    @include between-children {
      margin-bottom: $spacing * 2;
    }
  }
</style>
