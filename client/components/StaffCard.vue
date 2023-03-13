<script setup lang="ts">
interface Props {
  id: number;
  name: string;
  role: string;
  image: string;
  notes?: string;
}

defineProps<Props>();
</script>

<template>
  <article
    class="flex w-52 flex-col items-center justify-center rounded-2xl bg-white p-4 shadow transition duration-300 hover:shadow-lg"
  >
    <RouterLink to="#">
      <img
        :src="image"
        :alt="`${name}'s photo'`"
        class="h-32 w-32 flex-shrink-0 rounded-2xl object-cover object-top"
      />
    </RouterLink>

    <p
      class="mt-6 text-center text-lg font-semibold text-gray-700 hover:underline"
    >
      <RouterLink to="#">
        {{ name }}
      </RouterLink>
    </p>

    <p class="text-gray-500 hover:underline">
      <RouterLink to="#">
        {{ role }}
      </RouterLink>
    </p>
  </article>
</template>
