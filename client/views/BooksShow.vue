<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import type { Book } from '@T/books';

const book = ref<Book | null>(null);

const fetchBook = async () => {
  const { data } = await axios.get('http://localhost:4000/books/1');
  book.value = data;
};

onMounted(() => {
  fetchBook();
});
</script>

<template>
  <div>{{ book?.title }}</div>
</template>
