<script setup lang="ts">
type Theme = 'base' | 'inverted';

withDefaults(defineProps<{ active?: boolean }>(), {
  active: false,
});

const classes: Record<Theme, string> = {
  base: 'bg-primary-600 text-white hover:bg-primary-600/70 focus:ring-primary-700',
  inverted:
    'bg-white text-primary-700 hover:bg-primary-600/70 focus:ring-primary-700',
};
</script>

<template>
  <button
    class="rounded-full px-4 py-2 transition focus:outline-none focus:ring"
    :class="active ? classes.inverted : classes.base"
  >
    <slot />
  </button>
</template>
