<template>
  <n-modal
  v-model:show="showModal"
  @close="closeHandle"
  @esc="closeHandle"
  @mask-click="closeHandle"
  preset="card"
  size="small"
  :segmented="{ content: true }"
  :bordered="false"
  :title="title"
  :header-style="partStyles"
  :header-extra-style="partStyles"
  :content-style="partStyles"
  :footer-style="partStyles"
  class="app-modal-wrapper">
    <template #header>
      <n-h2>{{ title }}</n-h2>
    </template>

    <slot>
      <div>Slot default</div>
    </slot>

    <template #action>
      <n-space align="center" justify="end">
        <n-button @click="closeHandle" type="default" size="large">
          {{ closeButtonText }}
        </n-button>

        <n-button @click="submitHandle" type="info" size="large">
          {{ submitButtonText }}
        </n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script lang="ts">
  export default {
    name: 'app-modal',
  };
</script>

<script setup lang="ts">
  import { NButton, NH2, NModal, NSpace } from 'naive-ui';
  import { themeVariables } from '@/theme';
  import { toRefs } from 'vue';

  interface Props {
    showModal: boolean,
    readonly title: string,
    readonly closeButtonText: string,
    readonly submitButtonText: string,
  }

  interface Emits {
    (type: 'submitHandle'): void;
    (type: 'closeHandle'): void;
  }

  const props = defineProps<Props>();
  const emits = defineEmits<Emits>();
  
  const { showModal, title, closeButtonText, submitButtonText } = toRefs<Props>(props);
  const partStyles = `padding: ${themeVariables.spacing * 2}px;`;

  const closeHandle = (): void => {
    emits('closeHandle');
  };

  const submitHandle = (): void => {
    emits('submitHandle');
    closeHandle();
  };

  defineExpose({
    showModal,
  });
</script>

<style scoped lang="scss">
  .app-modal-wrapper {}
</style>
