<script lang="ts" setup>
import { h, ref, type Component } from "vue";
import { NIcon, NLayout, NLayoutSider, NSpace, NMenu } from "naive-ui";
import { Apps, Bot, Categories, Product, CloudServiceManagement } from "@vicons/carbon";
import { useRoute, useRouter } from "vue-router";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
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
    key: "users",
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
];

const router = useRouter();
const route = useRoute();

const currentRouteKey = ref<string>(route.name as string);

function changePage(key: string) {
  router.push({ name: key });
}
</script>

<template>
  <n-space vertical>
    <n-layout>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
        >
          <n-menu
            :value="currentRouteKey"
            @update:value="changePage"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>

        <n-layout embedded>
          <main class="main">
            <slot />
          </main>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style scoped>
.main {
  padding: 1rem 1.5rem;
}
</style>
