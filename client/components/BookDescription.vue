<script setup lang="ts">
// const collapsed = ref(false);
</script>

<template>
  <div class="relative text-gray-700">
    <div
      class="absolute flex h-full w-3 cursor-pointer items-center justify-center hover:text-primary-500/80"
    >
      <div class="h-[97%] border-r-[1.5px] border-r-current"></div>
    </div>

    <p class="ml-3">
      <slot />
    </p>
  </div>
</template>
