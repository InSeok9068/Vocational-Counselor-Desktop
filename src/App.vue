<template>
  <div class="mx-auto">
    <TheLayoutMenubar />
    <TheLayoutSideMenu />
    <TheLaytout />
    <AppToast />
    <AppDialog />
    <AppConfrimDialog />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppConfrimDialog from './components/app/AppConfrimDialog.vue';
import AppDialog from './components/app/AppDialog.vue';
import AppToast from './components/app/AppToast.vue';
import { usePocketbase } from './composables/pocketbase';
import TheLayoutMenubar from './layouts/TheLayoutMenubar.vue';
import TheLayoutSideMenu from './layouts/TheLayoutSideMenu.vue';
import TheLaytout from './layouts/TheLaytout.vue';

const { initPocketbase } = usePocketbase();

onMounted(() => {
  initPocketbase(); // 포켓베이스 초기화
});
</script>
