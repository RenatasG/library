<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <RouterLink
    :to="href"
    class="inline-block w-full cursor-pointer rounded-lg p-2 text-gray-900 transition hover:bg-primary-550"
  >
    <slot />
  </RouterLink>
</template>
