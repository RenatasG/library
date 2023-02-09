e
<script setup lang="ts">
type Theme = 'base' | 'success' | 'alert';
interface Props {
  theme?: Theme;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'base',
});
</script>

<template>
  <button
    class="rounded-md bg-primary-500 px-3 py-2 text-sm uppercase tracking-wider text-white shadow-sm transition hover:shadow-md"
  >
    <slot />
  </button>
</template>
