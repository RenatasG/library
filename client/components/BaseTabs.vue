<script setup lang="ts">
import type { Tab } from '@/composables/useTabs';

import TabButton from '@/components/TabButton.vue';

defineProps<{ tabs: Tab[] }>();
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-2 px-8">
      <TabButton v-for="tab in tabs" :key="tab.hash" v-bind="tab" />
    </div>

    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>
