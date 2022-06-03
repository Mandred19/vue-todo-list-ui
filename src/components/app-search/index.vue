<template>
  <div class="app-search">
    <n-input
    @input="handle($event)"
    :value="search"
    :clearable="true"
    type="text"
    :placeholder="'Search'"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, readonly, Ref, ref } from 'vue';
  import { NInput } from 'naive-ui';

  export default defineComponent({
    name: 'app-search',
    components: {
      NInput,
    },
    emits: ['input'],

    setup(props, { emit }) {
      const search: Ref<string> = ref('');

      const handle = (value: string): void => {
        search.value = value.trim().toLowerCase();
        emit('input', search.value);
      };

      return {
        search: readonly(search),
        handle,
      };
    },
  });
</script>

<style lang="scss">
  @use "src/styles/variables" as *;

  .app-search {
    padding: $spacing * 2 0;
  }
</style>
