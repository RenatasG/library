<script setup lang="ts">
import type { Book } from '@T/books';
import { useRoute } from 'vue-router';
import { useAxios } from '@/composables/useAxios';

import BaseButton from '@/components/BaseButton.vue';
import BookDescription from '@/components/BookDescription.vue';
import BaseTab from '@/components/BaseTab.vue';
import BooksShowTabs from '@/components/BooksShowTabs.vue';
import BooksShowStaffTab from '@/components/BooksShowStaffTab.vue';
import BooksShowEditionsTab from '@/components/BooksShowEditionsTab.vue';

const route = useRoute();
const book = ref<Book | null>(null);
const isLoading = ref(false);

const bookRoute = computed(() => `/books/${route.params['id']}`);

const fetchBook = () => {
  useAxios().get<Book>(bookRoute.value, {
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

    <div v-else-if="!!book" class="flex gap-14">
      <div>
        <img
          :src="book.cover"
          :alt="`Cover of ${book.title}`"
          class="w-60 rounded-lg"
        />

        <div class="mx-auto mt-8 flex w-11/12 flex-col gap-2">
          <BaseButton icon="book-open-page" theme="inverted">
            Reading
          </BaseButton>
          <BaseButton icon="book-plus-multiple">Completed</BaseButton>
          <BaseButton icon="bookshelf">Shelved</BaseButton>
          <BaseButton icon="">Planning</BaseButton>
        </div>
      </div>

      <div class="max-w-3xl">
        <h1 class="text-2xl font-medium">{{ book.title }}</h1>

        <BookDescription v-if="book.description" class="mt-4">
          {{ book.description }}
        </BookDescription>

        <BooksShowTabs class="mt-4" v-slot="{ tabs }">
          <BaseTab :tab="tabs.staff">
            <BooksShowStaffTab />
          </BaseTab>
          <BaseTab :tab="tabs.editions">
            <BooksShowEditionsTab />
          </BaseTab>
        </BooksShowTabs>
      </div>
    </div>
  </div>
</template>
