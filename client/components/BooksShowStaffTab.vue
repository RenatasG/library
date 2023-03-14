<script setup lang="ts">
import StaffCard from './StaffCard.vue';

import mockedStaff from '../../mocks/useStaff';
</script>

<template>
  <div class="flex gap-8">
    <StaffCard
      v-for="staff in mockedStaff"
      v-bind="staff"
      :key="staff.id"
      role="Author"
    />
  </div>
</template>
