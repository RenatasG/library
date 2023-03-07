<script setup lang="ts">
const MAX_LINES = 7;
const collapsed = ref(true);
const tooLong = ref(false);

const toggle = () => (collapsed.value = !collapsed.value);

const p = ref<HTMLParagraphElement | null>(null);

onMounted(() => {
  if (!p.value) return;

  const lineHeight = parseInt(window.getComputedStyle(p.value).lineHeight);
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
      class="absolute -left-3 flex h-full w-3 cursor-pointer items-center justify-center text-primary-600 hover:text-primary-500"
      @click="toggle"
    >
      <div
        class="border-r-[0.5px] border-r-current"
        :class="collapsed ? 'h-[93%]' : 'h-[97%]'"
      ></div>
    </div>

    <p
      ref="p"
      :class="{ 'line-clamp-7 relative': tooLong && collapsed }"
      @click="toggle"
    >
      <slot />
    </p>
  </div>
</template>

<style scoped>
p {
  pointer-events: none;
}
p.line-clamp-7::after {
  --line-height: 1.5;

  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: all;
  cursor: pointer;
  height: calc(1em * var(--line-height));
  background: linear-gradient(to bottom, transparent, #f7ebeb);
}
</style>
