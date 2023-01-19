<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <div class="bg-primary-500 h-screen w-screen">
    <AppNavbar />
    <RouterView />
    <AppFooter />
  </div>
</template>
