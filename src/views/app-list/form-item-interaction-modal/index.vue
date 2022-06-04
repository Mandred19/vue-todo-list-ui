<template>
  <n-modal
  v-model:show="isShowModal"
  @esc="closeModal"
  @maskClick="closeModal"
  preset="card"
  size="huge"
  :bordered="false"
  :title="modalTitle"
  class="app-modal-wrapper">
    <template #header>
      <n-h5>
        <n-text>{{ modalTitle }}</n-text>
      </n-h5>
    </template>

    <div>content</div>

    <template #action>
      <n-space align="center" justify="end">
        <n-button @click="closeModal" type="default" size="large">
          {{ modalResetButtonText }}
        </n-button>

        <n-button @click="submitHandle" type="info" size="large">
          {{ modalSubmitButtonText }}
        </n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NButton, NH5, NModal, NSpace, NText } from 'naive-ui';

  export default defineComponent({
    name: 'form-item-interaction-modal',
    components: {
      NModal,
      NSpace,
      NH5,
      NText,
      NButton,
    },
    props: ['showModal', 'title', 'resetButtonText', 'submitButtonText'],
    emits: ['submitHandle', 'closeModal'],

    setup(props, { emit }) {
      const closeModal = (): void => {
        emit('closeModal');
      };

      const submitHandle = (): void => {
        emit('submitHandle', {});
        closeModal();
      };

      return {
        submitHandle,
        closeModal,
        isShowModal: props.showModal,
        modalTitle: props.title,
        modalResetButtonText: props.resetButtonText,
        modalSubmitButtonText: props.submitButtonText,
      };
    },
  });
</script>

<style lang="scss">

</style>
