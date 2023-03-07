<script setup lang="ts">
import { NCard } from "naive-ui"
import LoginForm from "./LoginForm.vue"
</script>

<template>
  <NCard title="Login form">
    <LoginForm />
  </NCard>
</template>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
