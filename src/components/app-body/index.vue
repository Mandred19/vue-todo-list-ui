<template>
  <section class="app-body">
    <router-view/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'app-body',

    setup() {
      return {};
    },
  });
</script>

<style lang="scss">
  .app-body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
