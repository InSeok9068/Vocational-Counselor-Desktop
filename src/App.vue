<template>
  <TheLayoutToolbar />
  <TheLaytout />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import pb from './api/pocketbase';
import TheLayoutToolbar from './layouts/TheLayoutToolbar.vue';
import TheLaytout from './layouts/TheLaytout.vue';

onMounted(() => {
  console.log(pb.collection('users').getFullList());
});
</script>
