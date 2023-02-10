<script setup lang="ts">
const props = defineProps<{
  icon: string;
}>();

const iconPath = computed(() => `/dashboard.svg#${props.icon}`);
</script>

<template>
  <svg class="shrink-0 fill-current">
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>
