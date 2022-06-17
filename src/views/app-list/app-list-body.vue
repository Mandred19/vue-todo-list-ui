<template>
  <section class="list-body">
    <div>list-body</div>
  </section>
</template>

<script lang="ts">
  export default {
    name: 'app-list-body'
  };
</script>

<script setup lang="ts">

</script>

<style lang="scss">
  @use "src/styles/variables" as *;
  @use "src/styles/mixins" as *;

  .list-body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0 $spacing * 2;
    @include flex-layout(flex-start, flex-start);
  }
</style>
