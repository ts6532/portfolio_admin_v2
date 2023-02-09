<script lang="ts" setup>
import { useUsersStore } from "@modules/users/users.store"
import { NH1 } from "naive-ui"

const { users, loadUsers, createUser, updateUser } = useUsersStore()

loadUsers()
</script>
<template>
  <NH1>Users page</NH1>
</template>
