<template>
  <Menu :model="items" class="float-left h-[calc(100vh-9rem)] border-t-0 md:w-[15rem]">
    <template #submenuheader="{ item }">
      <span class="font-bold leading-none text-primary">{{ item.label }}</span>
    </template>
    <template #item="{ item, props }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        <span
          v-if="item.shortcut"
          class="ml-auto rounded-md border border-surface-200 bg-surface-100 p-1 text-xs dark:border-surface-700 dark:bg-surface-700"
        >
          {{ item.shortcut }}
        </span>
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: 'Dashboard',
    items: [
      {
        label: '대시보드 (1)',
        icon: 'pi pi-chart-bar',
        command: () => router.push('/dashboard-1'),
      },
      {
        label: '대시보드 (2)',
        icon: 'pi pi-chart-line',
        command: () => router.push('/dashboard-2'),
      },
      {
        label: '대시보드 (3)',
        icon: 'pi pi-chart-pie',
        command: () => router.push('/dashboard-3'),
      },
    ],
  },
  {
    label: 'Settings',
    items: [
      {
        label: '상담사 관리',
        icon: 'pi pi-user-edit',
        command: () => router.push('/counselors'),
      },
    ],
  },
  {
    label: 'Dev Tools',
    items: [
      {
        label: 'Page',
        icon: 'pi pi-wrench',
        command: () => router.push('/dev-pages'),
      },
      {
        label: 'Action',
        icon: 'pi pi-code',
        command: () => router.push('/dev-actions'),
      },
    ],
  },
]);
</script>
