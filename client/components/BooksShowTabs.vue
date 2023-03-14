<script setup lang="ts">
import { Tab, useTabs } from '@/composables/useTabs';
import BaseTabs from '@/components/BaseTabs.vue';

type Tabs = 'staff' | 'editions' | 'stats';

const tabsState = useTabs();

const tabs: Record<Tabs, Tab> = {
  staff: {
    hash: '#Staff',
    label: 'Staff',
  },
  editions: {
    hash: '#Editions',
    label: 'Editions',
  },
  stats: {
    hash: '#Stats',
    label: 'Stats',
  },
};
</script>

<template>
  <BaseTabs :tabs="tabsState.tabs">
    <slot :tabs="tabs" />
  </BaseTabs>
</template>
