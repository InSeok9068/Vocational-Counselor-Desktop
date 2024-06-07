import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore(
  'global',
  () => {
    const isSample = ref(false);

    return { isSample };
  },
  { persist: true },
);
