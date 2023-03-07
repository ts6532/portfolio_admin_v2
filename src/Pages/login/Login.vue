<script setup lang="ts">
import LoginCard from "features/auth/LoginCard.vue"
</script>

<template>
  <main class="main">
    <LoginCard />
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
</style>
