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
import pb from './api/pocketbase';
import AppConfrimDialog from './components/app/AppConfrimDialog.vue';
import AppDialog from './components/app/AppDialog.vue';
import AppToast from './components/app/AppToast.vue';
import TheLayoutMenubar from './layouts/TheLayoutMenubar.vue';
import TheLayoutSideMenu from './layouts/TheLayoutSideMenu.vue';
import TheLaytout from './layouts/TheLaytout.vue';

onMounted(() => {
  console.log(pb.collection('users').getFullList());
});
</script>
