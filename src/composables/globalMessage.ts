import { storeToRefs } from 'pinia';
import { useGlobalMessageStore } from '../stores/globalMessage.store';
import { UiDialogArgs, UiToastArgs } from '../ui/globalMessage.ui';

export const useGlobalMessage = () => {
  const { dialog, toast, confirmDialog } = storeToRefs(useGlobalMessageStore());

  const clearToast = () => {
    updateToast({
      show: false,
      message: '',
    });
  };

  const clearDialog = () => {
    updateDialog({
      show: false,
      title: '알림',
      message: '',
    });
  };

  const updateToast = (args: UiToastArgs) => {
    Object.assign(toast.value, args);
  };

  const updateDialog = (args: UiDialogArgs) => {
    Object.assign(dialog.value, args);
  };

  return {
    toast,
    dialog,
    confirmDialog,
    updateToast,
    updateDialog,
    clearToast,
    clearDialog,
  };
};
