<template>
  <Toolbar>
    <template #start>
      <a href="#" class="text-xl font-bold" @click.stop.prevent="$router.push('/')">직업 상담사 실적관리 도구</a>
    </template>

    <template #center>
      <IconField iconPosition="left">
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
    </template>

    <template #end>
      <div class="flex items-center gap-3">
        <span>{{ pb.authStore.isAuthRecord && `${pb.authStore.model!.name} 님` }}</span>

        <Button
          type="button"
          icon="pi pi-cog"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          @click="menu.toggle($event)"
        />
        <Menu ref="menu" id="overlay_menu" :model="menus" :popup="true" />
      </div>
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import pb from '../api/pocketbase';

const router = useRouter();
const menu = ref();
const menus = ref<MenuItem[]>([
  {
    label: '로그인',
    command: () => router.push('/signin'),
  },
  {
    label: '로그아웃',
    command: () => {
      pb.authStore.clear();
      router.push('/signin');
    },
  },
  {
    label: '설정 초기화',
    command: () => {
      localStorage.clear();
      location.reload();
    },
  },
]);
</script>
