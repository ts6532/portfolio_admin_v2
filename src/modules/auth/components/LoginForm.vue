<script lang="ts" setup>
import { ref } from "vue"
import type { FormInst } from "naive-ui"
import { NButton, NForm, NFormItem, NInput } from "naive-ui"
import { AuthForm } from "@modules/auth/types/AuthForm"
import { useAuthStore } from "@modules/auth"
import { useRouter } from "vue-router"
import { RouteNames } from "@/router/RouteNames"

const store = useAuthStore()

const router = useRouter()

const formRef = ref<FormInst | null>(null)

const formModel = ref<AuthForm>(new AuthForm())

const rules = {
  email: {
    required: true,
    message: "Please input email",
    trigger: ["input", "blur"],
  },

  password: {
    required: true,
    message: "Please input password",
    trigger: ["input", "blur"],
  },
}

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      try {
        await store.login(formModel.value)
        router.push({ name: RouteNames.HOME })
      } catch (e) {
        console.log(e)
      }
    }
  })
}
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
      <n-button type="primary" @click="handleValidateClick"> Validate</n-button>
    </n-form-item>
  </n-form>
</template>
