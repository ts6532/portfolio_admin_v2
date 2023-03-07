<script lang="ts" setup>
import { ref } from "vue"
import type { FormInst } from "naive-ui"
import { NButton, NForm, NFormItem, NInput } from "naive-ui"
import { useLoginForm } from "./useLoginForm";

const formRef = ref<FormInst | null>(null)

const { formModel, rules, handleValidateClick } = useLoginForm({ formRef })
</script>

<template>
  <n-form
    ref="formRef"
    :model="formModel"
    :rules="rules"
    label-width="auto"
    size="small"
  >
    <n-form-item label="Email" path="email">
      <n-input
        v-model:value="formModel.email"
        placeholder="Input email"
        type="text"
      />
    </n-form-item>

    <n-form-item label="Password" path="password">
      <n-input
        v-model:value="formModel.password"
        placeholder="Input password"
        type="password"
      />
    </n-form-item>

    <n-form-item>
      <n-button type="primary" @click="handleValidateClick">Validate</n-button>
    </n-form-item>
  </n-form>
</template>
