<template>
  <n-input
  @input="handle($event)"
  :value="search"
  :clearable="true"
  :size="'large'"
  type="text"
  :placeholder="'Filter list'"/>
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

</style>
