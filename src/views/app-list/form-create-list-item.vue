<template>
  <n-form
  :ref="formRef"
  :model="formModel"
  :rules="formRules"
  label-placement="left"
  require-mark-placement="right-hanging"
  size="large"
  label-width="auto">
    <n-form-item label="Title" path="title">
      <n-input v-model:value="formModel.title" placeholder="Title"/>
    </n-form-item>

    <n-form-item label="Description" path="description">
      <n-input
      v-model:value="formModel.description"
      placeholder="Description"
      type="textarea"
      :autosize="{
        minRows: 5,
        maxRows: 10,
      }"/>
    </n-form-item>

    <n-form-item label="Set favorite" path="setFavorite">
      <n-switch v-model:value="formModel.isFavorite"/>
    </n-form-item>
  </n-form>
</template>

<script lang="ts">
  export default {
    name: 'form-create-list-item',
  };
</script>

<script setup lang="ts">
  import { ref } from 'vue';
  import { FormInst, NForm, NFormItem, NInput, NSwitch } from 'naive-ui';
  import { FormItemRule } from 'naive-ui/es/form/src/interface';

  interface FormModel {
    title: string,
    description: string,
    isFavorite: boolean,
  }

  interface FormRules {
    title: FormItemRule,
  }
  
  const formRef = ref<FormInst | null>(null);
  const formModel = ref<FormModel>({
    title: '',
    description: '',
    isFavorite: false,
  });

  const formRules: FormRules = {
    title: {
      required: true,
      trigger: ['blur', 'input'],
      message: 'Title is not empty',
    },
  }
</script>

<style lang="scss">

</style>
