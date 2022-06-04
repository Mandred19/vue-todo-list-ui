<template>
  <section class="list-header">
    <n-button @click="openModal" type="info" size="large">
      <template #icon>
        <n-icon>
          <add-icon/>
        </n-icon>
      </template>
      Create todo
    </n-button>

    <app-search/>

    <form-item-interaction-modal
    v-if="isShowModal"
    @closeModal="isShowModal = false"
    :showModal="isShowModal"
    :title="'Create new item'"
    :resetButtonText="'Close'"
    :submitButtonText="'Create'"/>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, Ref } from 'vue';
  import { NIcon, NButton } from 'naive-ui';
  import AppSearch from '@/components/app-search/index.vue';
  import { AddFilled as addIcon } from '@vicons/material';
  import FormItemInteractionModal from '@/views/app-list/form-item-interaction-modal/index.vue';

  export default defineComponent({
    name: 'app-app-list-header',
    components: {
      AppSearch,
      NButton,
      NIcon,
      addIcon,
      FormItemInteractionModal,
    },

    setup() {
      const isShowModal: Ref<boolean> = ref(false);

      const openModal = (): void => {
        isShowModal.value = true;
      }

      return {
        isShowModal,
        openModal,
      };
    },
  });
</script>

<style lang="scss">
  @use "src/styles/variables" as *;
  @use "src/styles/mixins" as *;

  .list-header {
    width: 100%;
    padding: $spacing $spacing * 2;
    @include flex-layout(center, flex-start);
    @include between-children {
      margin-right: $spacing * 2;
    }
  }
</style>
