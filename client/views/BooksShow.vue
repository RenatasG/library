<script setup lang="ts">
import type { Book } from '@T/books';
import { useRoute } from 'vue-router';
import { useAxios } from '@/composables/useAxios';

import BaseButton from '@/components/BaseButton.vue';
import BookDescription from '@/components/BookDescription.vue';
import TabButton from '@/components/TabButton.vue';

import mockedStaff from '../../mocks/useStaff';
import StaffCard from '@/components/StaffCard.vue';

const route = useRoute();
const book = ref<Book | null>(null);
const isLoading = ref(false);

const fetchBook = () => {
  useAxios().get<Book>(`/books/${route.params['id']}`, {
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

        <div class="mt-4 flex flex-wrap gap-2 px-8">
          <TabButton active>Staff</TabButton>
          <TabButton>Editions</TabButton>
          <TabButton>Stats</TabButton>
        </div>

        <div class="mt-8 flex gap-8">
          <StaffCard
            v-for="staff in mockedStaff"
            v-bind="staff"
            :key="staff.id"
            role="Author"
          />
        </div>
      </div>
    </div>
  </div>
</template>
