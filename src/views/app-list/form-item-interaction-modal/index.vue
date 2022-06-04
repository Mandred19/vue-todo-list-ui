<template>
  <n-modal
  v-model:show="isShowModal"
  preset="card"
  size="huge"
  :bordered="false"
  :title="modalTitle">
    <template #header>
      <n-h6>
        <n-text>{{ modalTitle }}</n-text>
      </n-h6>
    </template>

    <div>content</div>

    <template #action>
      <n-button @click="closeModal" type="default" size="large">
        {{ modalResetButtonText }}
      </n-button>

      <n-button @click="submitHandle" type="info" size="large">
        {{ modalSubmitButtonText }}
      </n-button>
    </template>
  </n-modal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { NButton, NH6, NModal, NText } from 'naive-ui';

  export default defineComponent({
    name: 'form-item-interaction-modal',
    components: {
      NModal,
      NH6,
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
