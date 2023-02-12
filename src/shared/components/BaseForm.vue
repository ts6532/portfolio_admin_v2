<script lang="ts" setup>
import {
  FormInst,
  FormRules,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NSelect,
} from "naive-ui"
import { ref } from "vue"
import type { IFormSchema } from "@shared/types/IFormSchema"

const formRef = ref<FormInst | null>(null)

const props = defineProps<{
  formSchema: IFormSchema[]
  rules: FormRules
  formValue: Record<string | number, any>
}>()
</script>

<template>
  <n-form
    ref="formRef"
    :label-width="80"
    :model="formValue"
    :rules="rules"
    size="small"
  >
    <template v-for="item in formSchema" :key="item.key">
      <n-form-item :label="item.label" :path="item.key">
        <template v-if="item.renderOptions.type === 'input'">
          <n-input
            v-model:value="formValue[item.key]"
            :placeholder="
              item.renderOptions.inputProps?.placeholder ?? item.label
            "
          />
        </template>

        <template v-if="item.renderOptions.type === 'select'">
          <n-select
            v-model:value="formValue[item.key]"
            :options="item.renderOptions.selectProps?.options ?? []"
          ></n-select>
        </template>
      </n-form-item>
    </template>

    <n-form-item>
      <n-button @click="handleValidateClick"> Validate</n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped></style>
