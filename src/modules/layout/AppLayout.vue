<script setup lang="ts">
import type { layoutName } from "@modules/layout/layoutName";
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => {
  const currentLayout: layoutName = route?.meta?.layoutName || "DefaultLayout";

  return defineAsyncComponent(
    () =>
      import(
        /* @vite-ignore */ `@modules/layout/components/${currentLayout}.vue`
      )
  );
});
</script>

<template>
  <component v-if="layout" :is="layout"> <slot /> </component>
</template>
