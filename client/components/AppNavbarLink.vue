<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <RouterLink
    :to="href"
    class="inline-block w-full cursor-pointer rounded-lg bg-primary-600 p-2 text-white transition hover:bg-primary-550"
  >
    <slot />
  </RouterLink>
</template>
