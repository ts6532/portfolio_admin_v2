<script lang="ts" setup>
import { h, ref, type Component } from "vue";
import { NIcon } from "naive-ui";
import { Apps, Bot } from "@vicons/carbon";
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
    label: "Пользователи",
    key: "users",
    icon: renderIcon(Bot),
  },
];

const router = useRouter();
const route = useRoute();

const currentRouteKey = ref(route.name);

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
          <n-menu value:="currentRouteKey" on-update:value="changePage"
          :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
          />
        </n-layout-sider>

        <n-layout embedded>
          <slot />
        </n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>
