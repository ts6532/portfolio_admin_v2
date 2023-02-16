<script lang="ts" setup>
import { NH1 } from "naive-ui"
import { RouterView, useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <NH1>Users page</NH1>

  <RouterView :key="route.name" />
</template>
