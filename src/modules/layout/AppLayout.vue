<script lang="ts" setup>
import { useRoute } from "vue-router"
import DefaultLayout from "@modules/layout/components/DefaultLayout.vue"
import SimpleLayout from "@modules/layout/components/SimpleLayout.vue"

const route = useRoute()

const layouts = {
  DefaultLayout,
  SimpleLayout,
}
</script>

<template>
  <component :is="layouts[route.meta.layoutName]">
    <slot />
  </component>
</template>
