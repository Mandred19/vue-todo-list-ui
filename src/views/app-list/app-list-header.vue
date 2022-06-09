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

    <app-modal
    v-if="isShowModal"
    @close-handle="isShowModal = false"
    @submit-handle="isShowModal = false"
    :show-modal="isShowModal"
    :title="'Create new item'"
    :close-button-text="'Close'"
    :submit-button-text="'Create'">
      <div>
        123
      </div>
    </app-modal>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, Ref } from 'vue';
  import { NIcon, NButton } from 'naive-ui';
  import AppSearch from '@/components/app-search/index.vue';
  import { AddFilled as addIcon } from '@vicons/material';
  import AppModal from '@/components/app-modal.vue';

  export default defineComponent({
    name: 'app-app-list-header',
    components: {
      AppSearch,
      NButton,
      NIcon,
      addIcon,
      AppModal,
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
