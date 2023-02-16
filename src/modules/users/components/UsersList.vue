<script lang="ts" setup>
import { useUsersStore } from "@modules/users/users.store"
import { storeToRefs } from "pinia"
import { UserDto } from "@modules/users/types/user"
import { useBasePagination } from "@shared/composables/usePagination"
import {
  DataTableColumns,
  NButton,
  NDataTable,
  NDivider,
  NSpace,
} from "naive-ui"
import { useRouter } from "vue-router"
import { RouteNames } from "@/router/RouteNames"

const store = useUsersStore()

const { users } = storeToRefs(store)

const { loadUsers } = store

loadUsers()

const columns: DataTableColumns<UserDto> = [
  {
    title: "Email",
    key: "email",
  },
  {
    title: "Name",
    key: "firstname",
    render: (user) => user.firstname ?? "-",
  },
  {
    title: "Role",
    key: "role",
  },
]

const { pagination } = useBasePagination()

const router = useRouter()
function openCreateUserForm() {
  router.push({ name: RouteNames.USERS_CREATE })
}
</script>

<template>
  <n-space align="center" justify="end">
    <n-button ghost type="primary" @click="openCreateUserForm">
      Create new user</n-button
    >
  </n-space>

  <n-divider />

  <n-data-table :columns="columns" :data="users" :pagination="pagination" />
</template>
