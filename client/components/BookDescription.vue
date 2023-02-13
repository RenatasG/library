<script setup lang="ts">
const MAX_LINES = 7;
const collapsed = ref(true);
const tooLong = ref(false);

function toggle() {
  collapsed.value = !collapsed.value;
}

const p = ref<HTMLParagraphElement | null>(null);

onMounted(() => {
  const lineHeight = parseInt(window.getComputedStyle(p.value!).lineHeight);
  const lines = Math.ceil(p.value!.offsetHeight / lineHeight);

  if (lines > MAX_LINES) {
    tooLong.value = true;
  }
});
</script>

<template>
  <div class="relative text-gray-700">
    <div
      v-if="tooLong"
      class="absolute -left-3 flex h-full w-3 cursor-pointer items-center justify-center hover:text-primary-500"
      @click="toggle"
    >
      <div class="h-[97%] border-r-[0.5px] border-r-current"></div>
    </div>

    <p ref="p" :class="{ 'line-clamp-7': tooLong && collapsed }">
      <slot />
    </p>
  </div>
</template>
