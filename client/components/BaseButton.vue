<script setup lang="ts">
type Theme = 'base' | 'inverted' | 'success';
interface Props {
  theme?: Theme;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
}

withDefaults(defineProps<Props>(), {
  theme: 'base',
  disabled: false,
  loading: false,
});

const classes: Record<Theme, string> = {
  base: 'bg-primary-600 text-white hover:bg-primary-600/70 focus:ring-primary-700',
  inverted:
    'bg-white text-primary-700 hover:bg-primary-100 focus:ring-primary-700',
  success:
    'bg-emerald-400 text-white hover:bg-emerald-300 focus:ring-emerald-600',
};
</script>

<template>
  <button
    class="rounded-md px-3 py-2 text-sm uppercase tracking-wider transition focus:outline-none"
    :class="[
      {
        [classes[theme]]: !disabled,
        'shadow-sm hover:shadow-md focus:ring': !disabled,
        'cursor-not-allowed bg-gray-200 text-gray-400': disabled,
        'pointer-events-none': loading || disabled,
        'flex items-center justify-center gap-2': icon,
      },
    ]"
    :data-loading="loading"
  >
    <BaseIcon
      v-if="loading"
      icon="loading"
      class="absolute h-4 w-4 animate-spin text-inherit"
    />
    <BaseIcon v-if="icon" :icon="icon" class="icon h-4 w-4" />
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped>
[data-loading='true'] .icon,
[data-loading='true'] span {
  color: transparent;
}
</style>
