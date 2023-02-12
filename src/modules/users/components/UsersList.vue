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
  {
    title: "Is active",
    key: "isActivated",
    render: (user) => (user.isActivated ? "Active" : "Not active"),
  },
]

const { pagination } = useBasePagination()
</script>

<template>
  <n-space align="center" justify="end">
    <n-button ghost type="primary"> Create new user</n-button>
  </n-space>

  <n-divider />

  <n-data-table :columns="columns" :data="users" :pagination="pagination" />
</template>
