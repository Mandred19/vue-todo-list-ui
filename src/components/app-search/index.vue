<template>
  <div class="app-search">
    <n-input :value="inputValue"
             @input="inputHandle($event)"
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
      const inputValue: Ref<string> = ref('');

      const inputHandle = (value: string): void => {
        inputValue.value = value.trim().toLowerCase();
        emit('input', inputValue.value);
      };

      return {
        inputValue: readonly(inputValue),
        inputHandle,
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
