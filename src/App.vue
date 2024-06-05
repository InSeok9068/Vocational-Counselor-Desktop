<template>
  <div class="mx-auto">
    <TheLayoutMenubar />
    <TheLayoutSideMenu />
    <TheLaytout />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import pb from './api/pocketbase';
import TheLayoutMenubar from './layouts/TheLayoutMenubar.vue';
import TheLayoutSideMenu from './layouts/TheLayoutSideMenu.vue';
import TheLaytout from './layouts/TheLaytout.vue';

onMounted(() => {
  console.log(pb.collection('users').getFullList());
});
</script>
