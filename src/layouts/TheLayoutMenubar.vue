<template>
  <Menubar :model="items">
    <template #start>
      <a href="#" class="text-xl font-bold" @click.stop.prevent="$router.push('/')">직업 상담사 실적관리 도구</a>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span
          v-if="item.shortcut"
          class="ml-auto rounded-md border border-surface-200 bg-surface-100 p-1 text-xs dark:border-surface-500 dark:bg-surface-800"
          >{{ item.shortcut }}</span
        >
        <i
          v-if="hasSubmenu"
          :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"
        ></i>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-[8rem] sm:w-auto" />
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';

const items = ref<MenuItem[]>([]);
</script>
