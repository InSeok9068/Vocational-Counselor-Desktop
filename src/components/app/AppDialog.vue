<template>
  <Dialog v-model:visible="dialog.show" modal :header="dialog.title" :style="{ width: '25rem' }">
    <span class="p-text-secondary mb-5 block">{{ dialog.message }}</span>
  </Dialog>
</template>

<script setup lang="ts">
import { useGlobalMessage } from '../../composables/globalMessage';

const { dialog } = useGlobalMessage();
</script>
