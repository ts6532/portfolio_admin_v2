<script lang="ts" setup>
import { FormRules, NButton, NSpace } from "naive-ui"
import { useRouter } from "vue-router"
import type { CreateUserDto } from "@modules/users/types/user"
import type { IFormSchema } from "@shared/types/IFormSchema"
import BaseForm from "@shared/components/BaseForm.vue"
import { useUsersStore } from "@modules/users/users.store"

const router = useRouter()

const store = useUsersStore()

function handleCancel() {
  router.go(-1)
}

const model: CreateUserDto = {
  password: "",

  email: "",

  role: "Administrator",

  firstname: "",
}

const rules: FormRules = {
  email: [
    {
      required: true,
      message: "Email is required",
      trigger: ["input", "blur"],
    },
  ],

  password: [
    {
      required: true,
      message: "Password is required",
      trigger: ["input", "blur"],
    },
  ],
}

const formSchema: IFormSchema[] = [
  {
    key: "email",
    renderOptions: {
      label: "Email",
      type: "input",
      inputProps: {
        placeholder: "Input email",
      },
    },
  },
  {
    key: "password",
    renderOptions: {
      label: "Password",
      type: "input",
      inputProps: {
        placeholder: "Input password",
      },
    },
  },
  {
    key: "firstname",
    renderOptions: {
      label: "User name",
      type: "input",
      inputProps: {
        placeholder: "Input name",
      },
    },
  },
]

async function saveUser(model: CreateUserDto) {
  await store.createUser(model)
  router.go(-1)
}
</script>

<template>
  <n-space align="center" justify="end">
    <n-button ghost type="error" @click="handleCancel">Cancel</n-button>
  </n-space>

  <div class="form-wrapper">
    <BaseForm
      :formSchema="formSchema"
      :formValue="model"
      :rules="rules"
      submitLabel="Create user"
      @submit="saveUser"
    />
  </div>
</template>
<style scoped>
.form-wrapper {
  max-width: 600px;
  padding: 1rem;
  margin: 0 auto;
}
</style>
