<template>
  <section class="list-footer">
    <div>list-footer</div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'app-app-list-footer',
    components: {},

    setup() {
      return {};
    },
  });
</script>

<style lang="scss">
  @use "src/styles/variables" as *;
  @use "src/styles/mixins" as *;

  .list-footer {
    width: 100%;
    padding: $spacing $spacing * 2;
    @include flex-layout(center, flex-end);
    @include between-children {
      margin-right: $spacing * 2;
    }
  }
</style>
