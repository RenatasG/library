<script setup lang="ts">
import { Tab, useTab } from '@/composables/useTabs';

const props = defineProps<{ tab: Tab }>();

const tab = useTab(props.tab);
</script>

<template>
  <div v-if="tab.isActive">
    <slot />
  </div>
</template>
