<script setup lang="ts">
type Theme = 'base' | 'inverted' | 'success';
interface Props {
  theme?: Theme;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'base',
  disabled: false,
  loading: false,
});

const THEME_TO_STYLE = computed(() => {
  return {
    base: 'bg-primary-600 text-white hover:bg-primary-600/70 focus:ring-primary-700',
    inverted:
      'bg-white text-primary-700 hover:bg-white/40 focus:ring-primary-700',
    success:
      'bg-emerald-400 text-white hover:bg-emerald-300 focus:ring-emerald-600',
  }[props.theme];
});
</script>

<template>
  <button
    class="rounded-md px-3 py-2 text-sm uppercase tracking-wider transition focus:outline-none"
    :class="[
      { [THEME_TO_STYLE]: !disabled },
      { 'shadow-sm hover:shadow-md focus:ring': !disabled },
      { 'cursor-not-allowed bg-gray-200 text-gray-500': disabled },
      { 'flex items-center justify-center gap-2': icon },
    ]"
  >
    <BaseIcon v-if="icon" :icon="icon" class="h-4 w-4" />
    <slot />
  </button>
</template>
