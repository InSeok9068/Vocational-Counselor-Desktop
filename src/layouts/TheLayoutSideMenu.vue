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
    label: 'Documents',
    items: [
      {
        label: 'New',
        icon: 'pi pi-plus',
      },
    ],
  },
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        shortcut: '⌘+O',
        badge: 2,
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
    ],
  },
]);
</script>
