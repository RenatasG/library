<script setup lang="ts">
import AppNavbarSide from '@/components/AppNavbarSide.vue';
// import AppFooter from '@/components/AppFooter.vue';
import AppNavbarTop from '@/components/AppNavbarTop.vue';
</script>

<template>
  <div class="flex h-screen w-screen bg-primary-600">
    <AppNavbarSide />

    <div class="flex w-full flex-col">
      <AppNavbarTop />

      <div
        class="mr-4 mb-4 flex flex-grow flex-col overflow-y-auto rounded-3xl bg-primary-100 p-10"
      >
        <main class="h-full">
          <RouterView />
        </main>

        <!-- <AppFooter /> -->
      </div>
    </div>
  </div>
</template>
