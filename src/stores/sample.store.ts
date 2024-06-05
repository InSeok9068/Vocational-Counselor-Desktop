import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSampleStore = defineStore(
  'sample',
  () => {
    const isSample = ref(false);

    return { isSample };
  },
  { persist: true },
);
