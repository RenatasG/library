<script setup lang="ts">
import AppNavbarSide from '@/components/AppNavbarSide.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppNavbarTop from '@/components/AppNavbarTop.vue';
</script>

<template>
  <div class="flex h-screen w-screen overflow-x-hidden bg-primary-500">
    <AppNavbarSide />

    <div class="flex w-full flex-1 flex-col">
      <AppNavbarTop />

      <div
        class="mr-4 flex flex-grow flex-col overflow-y-auto rounded-3xl border border-white bg-white/20 p-10"
      >
        <main class="flex-grow overflow-x-hidden">
          <RouterView />
        </main>
      </div>

      <AppFooter />
    </div>
  </div>
</template>
