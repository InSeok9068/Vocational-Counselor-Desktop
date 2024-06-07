import { defineStore } from 'pinia';
import { ref } from 'vue';
import pb from '../api/pocketbase';

export const useGlobalConstStore = defineStore(
  'globalConst',
  () => {
    const isAuth = ref(pb.authStore.isAuthRecord);

    return {
      isAuth,
    };
  },
  { persist: true },
);
