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
        class="flex flex-grow flex-col overflow-y-auto rounded-t-3xl bg-white/20 pl-12 pt-12"
      >
        <main class="flex-grow overflow-x-hidden rounded-t-3xl bg-light-500">
          <RouterView />
        </main>
      </div>

      <AppFooter />
    </div>
  </div>
</template>
