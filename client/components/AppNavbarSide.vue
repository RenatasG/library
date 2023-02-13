<script setup lang="ts">
import AppNavbarLink from '@/components/AppNavbarLink.vue';

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/books',
    label: 'Books',
  },
];
</script>

<template>
  <div class="h-screen">
    <div class="w-60">
      <nav class="mt-16 px-2">
        <ul class="space-y-2">
          <li v-for="{ href, label } in links" :key="href">
            <AppNavbarLink :href="href">{{ label }}</AppNavbarLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
