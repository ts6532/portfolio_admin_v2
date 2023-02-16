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
  submitLabel: string
}>()

const emit = defineEmits<{
  (e: "submit", model: Record<string | number, any>): void
}>()

const model = ref(props.formValue)

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()

  formRef.value?.validate((errors) => {
    if (!errors) emit("submit", model.value)
  })
}
</script>

<template>
  <n-form
    ref="formRef"
    :label-width="80"
    :model="model"
    :rules="props.rules"
    size="small"
  >
    <template v-for="item in props.formSchema" :key="item.key">
      <n-form-item :label="item.renderOptions.label" :path="item.key">
        <template v-if="item.renderOptions.type === 'input'">
          <n-input
            v-model:value="model[item.key]"
            :placeholder="
              item.renderOptions.inputProps?.placeholder ?? item.label
            "
          />
        </template>

        <template v-if="item.renderOptions.type === 'select'">
          <n-select
            v-model:value="model[item.key]"
            :options="item.renderOptions.selectProps?.options ?? []"
          ></n-select>
        </template>
      </n-form-item>
    </template>

    <n-form-item justify="end">
      <n-button @click="handleValidateClick">{{
        submitLabel ?? "Validate"
      }}</n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped></style>
