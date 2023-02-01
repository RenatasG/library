<script setup lang="ts">
import type { Book } from '@T/books';
import { useAxios } from '@/composables/useAxios';

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
  <div>{{ book?.title || 'loading' }}</div>
</template>
