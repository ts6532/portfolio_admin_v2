<script lang="ts" setup>
import { type Component, h } from "vue"
import { NIcon, NLayout, NLayoutSider, NMenu, NSpace } from "naive-ui"
import {
  Apps,
  Bot,
  Categories,
  CloudServiceManagement,
  Product,
} from "@vicons/carbon"
import { useRoute, useRouter } from "vue-router"
import { RouteNames } from "@/router/RouteNames"

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: "Главная",
    key: "home",
    icon: renderIcon(Apps),
  },
  {
    label: "Настройка",
    key: "preferences",
    icon: renderIcon(CloudServiceManagement),
  },
  {
    label: "Пользователи",
    key: RouteNames.USERS_LIST,
    icon: renderIcon(Bot),
  },
  {
    label: "Категории",
    key: "categories",
    icon: renderIcon(Categories),
  },
  {
    label: "Проекты",
    key: "projects",
    icon: renderIcon(Product),
  },
]

const router = useRouter()
const route = useRoute()

function changePage(key: string) {
  router.push({ name: key })
}
</script>

<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        :collapsed-width="64"
        :native-scrollbar="false"
        :width="240"
        bordered
        collapse-mode="width"
        show-trigger
      >
        <n-menu
          :collapsed-icon-size="22"
          :collapsed-width="64"
          :options="menuOptions"
          :value="route.name"
          @update:value="changePage"
        />
      </n-layout-sider>

      <main class="main">
        <slot />
      </main>
    </n-layout>
  </n-space>
</template>

<style scoped>
.main {
  padding: 1rem 1.5rem;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f9fa;
}
</style>
