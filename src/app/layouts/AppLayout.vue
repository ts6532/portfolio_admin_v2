<script lang="ts" setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import DefaultLayout from "./DefaultLayout.vue"
import SimpleLayout from "./SimpleLayout.vue"

const route = useRoute()

const currentLayout = computed<LayoutName>(
  () => route.meta.layoutName ?? "DefaultLayout",
)

const layouts = {
  DefaultLayout,
  SimpleLayout,
}
</script>

<template>
  <component :is="layouts[currentLayout]">
    <slot />
  </component>
</template>
