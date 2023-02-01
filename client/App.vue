<script setup lang="ts">
import AppNavbarSide from '@/components/AppNavbarSide.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppNavbarTop from '@/components/AppNavbarTop.vue';
</script>

<template>
  <div class="bg-primary-500 h-screen w-screen flex overflow-x-hidden">
    <AppNavbarSide />

    <div class="w-full flex flex-col">
      <AppNavbarTop />

      <div
        class="flex flex-col flex-grow rounded-t-3xl overflow-y-auto bg-white/20 pl-12 pt-12"
      >
        <main class="bg-light-500 rounded-t-3xl overflow-x-hidden flex-grow">
          <RouterView />
        </main>

        <AppFooter />
      </div>
    </div>
  </div>
</template>
