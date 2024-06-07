import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalConstStore = defineStore(
  'globalConst',
  () => {
    const theme = ref('light');
    return {
      theme,
    };
  },
  { persist: true },
);
