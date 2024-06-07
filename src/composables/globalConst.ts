import { storeToRefs } from 'pinia';
import { useGlobalConstStore } from '../stores/globalConst.store';

export const useGlobalConst = () => {
  const { isAuth } = storeToRefs(useGlobalConstStore());

  return {
    isAuth,
  };
};
