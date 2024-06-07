/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import pb from '../api/pocketbase';
import { useGlobalMessage } from './globalMessage';

export const usePocketbase = () => {
  const { dialog, updateDialog } = useGlobalMessage();

  const initPocketbase = () => {
    pb.afterSend = (response, data) => {
      if (200 !== response.status && 204 != response.status) {
        console.error(data);

        updateDialog({
          ...dialog.value,
          show: true,
          message: data.message,
        });

        return data;
      } else {
        return data;
      }
    };
  };

  return { initPocketbase };
};
