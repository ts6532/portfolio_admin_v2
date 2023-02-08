<script lang="ts" setup>
import { NCard } from "naive-ui"
import LoginForm from "@modules/auth/components/LoginForm.vue"
</script>

<template>
  <main class="main">
    <n-card title="Login form">
      <LoginForm />
    </n-card>
  </main>
</template>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-color: #999999;
  display: grid;
  place-items: center;
}

.n-card {
  max-width: 300px;
}
</style>