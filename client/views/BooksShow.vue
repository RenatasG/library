<script setup lang="ts">
import type { Book } from '@T/books';
import { useAxios } from '@/composables/useAxios';

import BaseButton from '@/components/BaseButton.vue';

const book = ref<Book | null>(null);
const isLoading = ref(false);

const fetchBook = () => {
  useAxios().get<Book>('/books/1', {
    onStart() {
      isLoading.value = true;
    },
    onSuccess(data) {
      book.value = data;
    },
    onError(e: unknown) {
      console.error(e);
    },
    onFinish() {
      isLoading.value = false;
    },
  });
};

onMounted(() => {
  fetchBook();
});
</script>

<template>
  <div>
    <div v-if="isLoading">loading</div>

    <div v-else class="flex gap-8">
      <div>
        <img
          :src="book?.cover"
          :alt="`Cover of ${book?.title}`"
          class="w-60 rounded-lg"
        />

        <div class="mx-auto mt-8 flex w-11/12 flex-col gap-2">
          <BaseButton>Reading</BaseButton>
          <BaseButton theme="success">Completed</BaseButton>
          <BaseButton>Stalled</BaseButton>
          <BaseButton>Planned</BaseButton>
        </div>
      </div>

      <div class="max-w-3xl">
        <h1 class="text-2xl font-medium">{{ book?.title }}</h1>

        <p class="mt-4 text-gray-700">
          {{ book?.description }}
        </p>
      </div>
    </div>
  </div>
</template>
