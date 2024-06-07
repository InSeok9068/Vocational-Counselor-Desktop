import { defineStore } from 'pinia';
import { ref } from 'vue';
import { UiDialogArgs, UiToastArgs } from '../ui/globalMessage.ui';

export const useGlobalMessageStore = defineStore(
  'globalMessage',
  () => {
    const toast = ref<UiToastArgs>({
      show: false,
      message: '',
    });

    const dialog = ref<UiDialogArgs>({
      show: false,
      title: '알림',
      message: '',
    });

    const confirmDialog = ref();

    return {
      toast,
      dialog,
      confirmDialog,
    };
  },
  { persist: true },
);
