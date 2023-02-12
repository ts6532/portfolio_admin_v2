<script lang="ts" setup>
import { NButton, NSpace } from "naive-ui"
import { useRoute } from "vue-router"

const route = useRoute()

const form = {
  "create-user": import("./UsersList.vue"),
  "update-user": import("./UsersList.vue"),
}
</script>

<template>
  <n-space align="center" justify="end">
    <n-button ghost type="primary">Save user</n-button>
    <n-button ghost type="error">Cancel</n-button>
  </n-space>

  <template :key="route.name">
    <component :is="form[route.name]"></component>
  </template>
</template>
<style scoped></style>
